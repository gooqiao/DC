"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "/test/api/user": {
        name: "UserName",
        contact: {
            _key: "ContactInfo",
            phone: "TelPhone",
        },
        formerName: "NameHistory",
        loginData: {
            _key: "LoginRecord[0]",
            time: "LoginTime",
            host: {
                ip: "IP",
            },
        },
        family: {
            _key: "Family",
            _formatter: function (data) {
                // 自定义函数转换
                let result = [];
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];
                        result.push({ ...element, type: key });
                    }
                }
                return result;
            },
        },
        father: {
            _key: "Family.father",
            _includeKeys: ["name"],
        },
        // 取数组
        loginDatas: {
            _key: "LoginRecord",
            time: "LoginTime",
            host: {
                ip: "IP",
            },
        },
    },
};
//# sourceMappingURL=maps.js.map