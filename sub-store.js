function operator(proxies) {
    const REGION_CONFIG = [
        { key: '香港',      flag: '🇭🇰', pattern: /HongKong|HONG.?KONG|HKG|xinyitang|CMLiussss|重置剩余|套餐到期|剩余流量|(?<![a-zA-Z0-9])HK(?![a-zA-Z0-9])/i },
        { key: '台湾',      flag: '🇨🇳', pattern: /Taiwan|台湾|TWN|(?<![a-zA-Z0-9])TW(?![a-zA-Z0-9])/i },
        { key: '日本',      flag: '🇯🇵', pattern: /Japan|日本|JPN|(?<![a-zA-Z0-9])JP(?![a-zA-Z0-9])/i },
        { key: '美国',      flag: '🇺🇸', pattern: /United.?States|美国|IPV6|(?<![a-zA-Z0-9])US(?![a-zA-Z0-9])|(?<![a-zA-Z0-9])USA(?![a-zA-Z0-9])/i },
        { key: '新加坡',    flag: '🇸🇬', pattern: /Singapore|新加坡|SGP|(?<![a-zA-Z0-9])SG(?![a-zA-Z0-9])/i },
        { key: '英国',      flag: '🇬🇧', pattern: /United.?Kingdom|英国|(?<![a-zA-Z0-9])UK(?![a-zA-Z0-9])|(?<![a-zA-Z0-9])GB(?![a-zA-Z0-9])/i },
        { key: '加拿大',    flag: '🇨🇦', pattern: /Canada|加拿大|(?<![a-zA-Z0-9])CA(?![a-zA-Z0-9])/i },
        { key: '韩国',      flag: '🇰🇷', pattern: /Korea|韩国|(?<![a-zA-Z0-9])KR(?![a-zA-Z0-9])/i },
        { key: '印度',      flag: '🇮🇳', pattern: /India|印度|(?<![a-zA-Z0-9])IN(?![a-zA-Z0-9])/i },
        { key: '德国',      flag: '🇩🇪', pattern: /Germany|德国|(?<![a-zA-Z0-9])DE(?![a-zA-Z0-9])/i },
        { key: '荷兰',      flag: '🇳🇱', pattern: /Netherlands|荷兰|(?<![a-zA-Z0-9])NL(?![a-zA-Z0-9])/i },
        { key: '芬兰',      flag: '🇫🇮', pattern: /Finland|芬兰|(?<![a-zA-Z0-9])FI(?![a-zA-Z0-9])/i },
        { key: '法国',      flag: '🇫🇷', pattern: /France|法国|(?<![a-zA-Z0-9])FR(?![a-zA-Z0-9])/i },
        { key: '瑞典',      flag: '🇸🇪', pattern: /Sweden|瑞典|(?<![a-zA-Z0-9])SE(?![a-zA-Z0-9])/i },
        { key: '土耳其',    flag: '🇹🇷', pattern: /Turkey|Turkiye|土耳其|(?<![a-zA-Z0-9])TR(?![a-zA-Z0-9])/i },
        { key: '拉脱维亚',  flag: '🇱🇻', pattern: /Latvia|拉脱维亚|(?<![a-zA-Z0-9])LV(?![a-zA-Z0-9])/i },
        { key: '澳大利亚',  flag: '🇦🇺', pattern: /Australia|澳大利亚|(?<![a-zA-Z0-9])AU(?![a-zA-Z0-9])/i },
        { key: '俄罗斯',    flag: '🇷🇺', pattern: /Russia|俄罗斯|(?<![a-zA-Z0-9])RU(?![a-zA-Z0-9])/i },
        { key: '巴西',      flag: '🇧🇷', pattern: /Brazil|巴西|(?<![a-zA-Z0-9])BR(?![a-zA-Z0-9])/i },
        { key: '波兰',      flag: '🇵🇱', pattern: /Poland|波兰|(?<![a-zA-Z0-9])PL(?![a-zA-Z0-9])/i },
        { key: '捷克',      flag: '🇨🇿', pattern: /Czech|捷克|(?<![a-zA-Z0-9])CZ(?![a-zA-Z0-9])/i },
        { key: '匈牙利',    flag: '🇭🇺', pattern: /Hungary|匈牙利|(?<![a-zA-Z0-9])HU(?![a-zA-Z0-9])/i },
        { key: '罗马尼亚',  flag: '🇷🇴', pattern: /Romania|罗马尼亚|(?<![a-zA-Z0-9])RO(?![a-zA-Z0-9])/i },
        { key: '乌克兰',    flag: '🇺🇦', pattern: /Ukraine|乌克兰|(?<![a-zA-Z0-9])UA(?![a-zA-Z0-9])/i },
        { key: '挪威',      flag: '🇳🇴', pattern: /Norway|挪威|(?<![a-zA-Z0-9])NO(?![a-zA-Z0-9])/i },
        { key: '丹麦',      flag: '🇩🇰', pattern: /Denmark|丹麦|(?<![a-zA-Z0-9])DK(?![a-zA-Z0-9])/i },
        { key: '瑞士',      flag: '🇨🇭', pattern: /Switzerland|瑞士|(?<![a-zA-Z0-9])CH(?![a-zA-Z0-9])/i },
        { key: '奥地利',    flag: '🇦🇹', pattern: /Austria|奥地利|(?<![a-zA-Z0-9])AT(?![a-zA-Z0-9])/i },
        { key: '西班牙',    flag: '🇪🇸', pattern: /Spain|西班牙|(?<![a-zA-Z0-9])ES(?![a-zA-Z0-9])/i },
        { key: '意大利',    flag: '🇮🇹', pattern: /Italy|意大利|(?<![a-zA-Z0-9])IT(?![a-zA-Z0-9])/i },
        { key: '葡萄牙',    flag: '🇵🇹', pattern: /Portugal|葡萄牙|(?<![a-zA-Z0-9])PT(?![a-zA-Z0-9])/i },
        { key: '马来西亚',  flag: '🇲🇾', pattern: /Malaysia|马来西亚|(?<![a-zA-Z0-9])MY(?![a-zA-Z0-9])/i },
        { key: '越南',      flag: '🇻🇳', pattern: /Vietnam|越南|(?<![a-zA-Z0-9])VN(?![a-zA-Z0-9])/i },
        { key: '泰国',      flag: '🇹🇭', pattern: /Thailand|泰国|(?<![a-zA-Z0-9])TH(?![a-zA-Z0-9])/i },
        { key: '菲律宾',    flag: '🇵🇭', pattern: /Philippines|菲律宾|(?<![a-zA-Z0-9])PH(?![a-zA-Z0-9])/i },
        { key: '印尼',      flag: '🇮🇩', pattern: /Indonesia|印尼|印度尼西亚|(?<![a-zA-Z0-9])ID(?![a-zA-Z0-9])/i },
        { key: '阿联酋',    flag: '🇦🇪', pattern: /Emirates|阿联酋|(?<![a-zA-Z0-9])AE(?![a-zA-Z0-9])/i },
        { key: '沙特',      flag: '🇸🇦', pattern: /Saudi|沙特|(?<![a-zA-Z0-9])SA(?![a-zA-Z0-9])/i },
        { key: '阿根廷',    flag: '🇦🇷', pattern: /Argentina|阿根廷|(?<![a-zA-Z0-9])AR(?![a-zA-Z0-9])/i },
        { key: '墨西哥',    flag: '🇲🇽', pattern: /Mexico|墨西哥|(?<![a-zA-Z0-9])MX(?![a-zA-Z0-9])/i },
        { key: '南非',      flag: '🇿🇦', pattern: /South.?Africa|南非|(?<![a-zA-Z0-9])ZA(?![a-zA-Z0-9])/i },
        { key: '澳门',      flag: '🇲🇴', pattern: /Macao|Macau|澳门|(?<![a-zA-Z0-9])MO(?![a-zA-Z0-9])/i },
        { key: '爱沙尼亚',  flag: '🇪🇪', pattern: /Estonia|爱沙尼亚|(?<![a-zA-Z0-9])EE(?![a-zA-Z0-9])/i },
        { key: '哈萨克斯坦',flag: '🇰🇿', pattern: /Kazakhstan|哈萨克|(?<![a-zA-Z0-9])KZ(?![a-zA-Z0-9])/i },
        { key: '哥伦比亚',  flag: '🇨🇴', pattern: /Colombia|哥伦比亚|(?<![a-zA-Z0-9])CO(?![a-zA-Z0-9])/i },
    ];

    const counter = new Map();

    return proxies.map(p => {
        const name = p.name;
        let regionKey = '其他';
        let flag = '🌐';

        const match = REGION_CONFIG.find(r => r.pattern.test(name));
        if (match) {
            regionKey = match.key;
            flag = match.flag;
        }

        const count = (counter.get(regionKey) || 0) + 1;
        counter.set(regionKey, count);
        const index = count.toString().padStart(2, '0');

        p.name = `${flag} ${regionKey} ${index}`;
        return p;
    });
}