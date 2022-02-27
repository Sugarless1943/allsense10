let nodes = smart_valve.nodes
function getSettings(nodeId, key, node) {
    let config = nodes.find(item => {
        return item.nodeId == nodeId
    })
    let settings = config.parameters.settings || config.parameters.constantValues
    return settings[`${node}_${key}`]
}

function getFromStationConfig(nodeId, key, uid) {
    let config = nodes.find(item => {
        return item.nodeId == nodeId
    })
    let conditions = config.parameters.conditions

    for(let i=0;i<conditions.length;i++) {
        let condUid = conditions[i].condition.split("\"")[1]
        if(condUid == uid) {
            return conditions[i][key]
        }
    }
}