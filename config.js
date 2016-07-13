module.exports = {
    type: 'daemon',
    prerequisites: {
        cpu: '',
        memory: ''
    },
    serviceName: "udacD",
    serviceGroup: "UDACs Daemon",
    serviceVersion: 1,
    servicePort: 4031,
    extKeyRequired: false,
    "errors": {},
    "schema": {
        "udacD": {
            "l": "UDACs services"
        }
    }
};
