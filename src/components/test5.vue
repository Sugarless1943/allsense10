<el-container>
  <el-header>
    <div class="alarm-title">告警配置项管理</div>
  </el-header>
  <split-pane :default-percent="20" :min-percent="15" split="vertical">
    <template slot="paneL">
      <as-tree
        :treeConfig="treeConfig"
        @onTreeNodeAdded="handleTreeNodeAdded"
        @onTreeNodeEdited="handleTreeNodeEdited"
        @onTreeNodeEditedPass="onTreeNodeEditedPass"
        @onTreeNodeDeleted="handleTreeNodeDeleted"
        @onTreeNodeExpand="nodeExpand"
        @onTreeNodeCollapse="nodeCollapse"
        @onTreeNodeChanged="handleTreeNodeChanged"></as-tree>

      <el-dialog class="el-setDialogWidth" title="添加下级告警组" @close="resetForm('addNextNodeForm')"
                 :visible.sync="dialogdetailsAddNodeVisible">
        <el-form :model="addNextNodeForm" :rules="rules" ref="addNextNodeForm" label-width="100px"
                 class="el-dialog-FormWidth">
          <el-form-item label="告警组名称" prop="label">
            <el-input v-model="addNextNodeForm.label" maxlength="20" placeholder="请输入告警组名称" class="el-dialog-setWidth"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogdetailsAddNodeVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitDialogAddNodeForm('addNextNodeForm')">确 定</el-button>
        </div>
      </el-dialog>
    </template>
    <template slot="paneR">
      <el-container>
        <el-main style="padding: 0 20px">
          <div class="item-filter" style="justify-content: space-between;padding-top: 0">
            <div>
              <el-button type="primary" @click="alarmAdd" v-if="buttonState">创建告警配置项</el-button>
              <el-button type="primary" @click="adviceObject" v-if="buttonState">设置通知对象</el-button>
            </div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <el-input v-model="formInline.filterStr" class="mediaInput" placeholder="数据表"
                          @keyup.enter.stop.native="onSearch"></el-input>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formInline.state" class="mediaInput" placeholder="状态">
                  <el-option
                    v-for="item in flagOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSearch">查询</el-button>
                <el-button type="primary" @click="onReset">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <p>通知接收人/组：{{userLabel}}</p>
          <div class="tableOperation" v-if="buttonState">
            <div class="tabSelClear">
              <i class="el-icon-warning"></i> 已选 <span>{{choseNumber}}</span>项
              <span class="clearSelection" @click="clearSelection()">清除</span>
            </div>
            <div>
              <el-button size="mini" @click="go" :disabled="selectionIds.length == 0">启用</el-button>
              <el-button size="mini" @click="stop" :disabled="selectionIds.length == 0">禁用</el-button>
              <el-button size="mini" @click="move" :disabled="selectionIds.length == 0">移动至组</el-button>
              <el-button size="mini" @click="del" :disabled="selectionIds.length == 0">删除</el-button>
            </div>
          </div>
          <el-table
            ref="conTable"
            :data="tableData"
            style="width: 100%"
            :row-style="{'cursor':'pointer'}"
            @row-click="rowClick"
            @select="tableSelect"
            @select-all="tableSelect"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              v-if="buttonState"
              width="55">
            </el-table-column>
            <el-table-column
              type="index"
              :index="tableIndex"
              label="序号"
              width="55">
            </el-table-column>
            <el-table-column
              prop="datasource"
              label="数据表">
            </el-table-column>
            <el-table-column
              prop="groupFields"
              label="分组字段"
              width="350">
              <template slot-scope="scope">
                {{ scope.row.groupFields.join(",") }}
              </template>
            </el-table-column>
            <el-table-column
              prop="alarmFields"
              label="告警字段">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态">
              <template slot-scope="scope">
                {{ scope.row.state ? '启用' : '禁用' }}
              </template>
            </el-table-column>
            <el-table-column label="操作" v-if="buttonState">
              <template slot-scope="scope">
                <span @click.stop="stateOneChange(scope.row.state,scope.row.id)" class="tabHref">{{scope.row.state ? '禁用' : '启用'}}</span>
                <span @click.stop="deleteOne(scope.row.id)" class="tabHref">删除</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="item-filter">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total=pageTotal>
            </el-pagination>
          </div>
        </el-main>
      </el-container>
    </template>
  </split-pane>
  <el-dialog
    title="选择要移动到的告警组"
    :visible.sync="dialogVisibleMove"
    width="30%">
    <as-tree
      :treeConfig="treeConfig"
      @onTreeNodeChanged="handleTreeNodeMove"
      :before-close="moveClose"></as-tree>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleMove = false">取 消</el-button>
        <el-button type="primary" @click="moveSubmit">确 定</el-button>
      </span>
  </el-dialog>
</el-container>
