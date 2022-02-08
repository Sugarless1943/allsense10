let config = {
    "settings": {
        "b1_1_priorityLevel": 1,
        "b1_2_priorityLevel": 1,
        "b1_3_priorityLevel": 1,
        "b1_4_priorityLevel": 1,
        "b1_5_priorityLevel": 1
    },
    "conditions": [
        {
            "condition": "uid==\"fb8877c7-ec5c-46d2-91af-dde97eb81ef2\"",
            "Vi_straighten": "b1_1_priorityLevel"
        },
        {
            "condition": "uid==\"fc32a6bf-4147-4555-b0b3-d9ade7814645\"",
            "Vi_straighten": "b1_2_priorityLevel"
        },
        {
            "condition": "uid==\"f7cd7edf-3513-445e-b072-6688f22889f0\"",
            "Vi_straighten": "b1_3_priorityLevel"
        },
        {
            "condition": "uid==\"096715ab-702c-44b1-8989-0317178c48f1\"",
            "Vi_straighten": "b1_4_priorityLevel"
        },
        {
            "condition": "uid==\"0a3e11a5-dca8-461f-b168-7ca7c2aa3122\"",
            "Vi_straighten": "b1_5_priorityLevel"
        }
    ],
    "derivedFields": [
        {
            "name": "priorityLevel",
            "type": "DOUBLE"
        }
    ]
}

let settings = config.settings
for (let i = 0; i < config.conditions.length; i++) {
    
}