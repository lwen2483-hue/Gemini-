function operator(proxies) {
    const REGION_CONFIG = [
        { key: '香港',    flag: '🇭🇰', pattern: /HongKong|HONG.?KONG|HKG|xinyitang|CMLiussss|重置剩余|套餐到期|剩余流量|(?<!\w)HK(?!\w)/i },
        { key: '台湾',    flag: '🇨🇳', pattern: /Taiwan|台湾|TWN|(?<!\w)TW(?!\w)/i },
        { key: '日本',    flag: '🇯🇵', pattern: /Japan|日本|JPN|(?<!\w)JP(?!\w)/i },
        { key: '美国',    flag: '🇺🇸', pattern: /United.?States|美国|IPV6|(?<!\w)US(?!\w)|(?<!\w)USA(?!\w)/i },
        { key: '新加坡',  flag: '🇸🇬', pattern: /Singapore|新加坡|SGP|(?<!\w)SG(?!\w)/i },
        { key: '英国',    flag: '🇬🇧', pattern: /United.?Kingdom|英国|(?<!\w)UK(?!\w)|(?<![.\d])GB(?:\s|\d|$)/i },
        { key: '加拿大',  flag: '🇨🇦', pattern: /Canada|加拿大|(?<!\w)CA(?!\w)/i },
        { key: '韩国',    flag: '🇰🇷', pattern: /Korea|韩国|(?<!\w)KR(?!\w)/i },
        { key: '印度',    flag: '🇮🇳', pattern: /India|印度|(?<!\w)IN(?!\w)/i },
        { key: '德国',    flag: '🇩🇪', pattern: /Germany|德国|(?<!\w)DE(?!\w)/i },
        { key: '荷兰',    flag: '🇳🇱', pattern: /Netherlands|荷兰|(?<!\w)NL(?!\w)/i },
        { key: '芬兰',    flag: '🇫🇮', pattern: /Finland|芬兰|(?<!\w)FI(?!\w)/i },
        { key: '法国',    flag: '🇫🇷', pattern: /France|法国|(?<!\w)FR(?!\w)/i },
        { key: '瑞典',    flag: '🇸🇪', pattern: /Sweden|瑞典|(?<!\w)SE(?!\w)/i },
        { key: '土耳其',  flag: '🇹🇷', pattern: /Turkey|Turkiye|土耳其|(?<!\w)TR(?!\w)/i },
        { key: '拉脱维亚',flag: '🇱🇻', pattern: /Latvia|拉脱维亚|(?<!\w)LV(?!\w)/i },
        { key: '澳大利亚',flag: '🇦🇺', pattern: /Australia|澳大利亚|(?<!\w)AU(?!\w)/i },
        { key: '俄罗斯',  flag: '🇷🇺', pattern: /Russia|俄罗斯|(?<!\w)RU(?!\w)/i },
        { key: '巴西',    flag: '🇧🇷', pattern: /Brazil|巴西|(?<!\w)BR(?!\w)/i },
        { key: '波兰',    flag: '🇵🇱', pattern: /Poland|波兰|(?<!\w)PL(?!\w)/i },
        { key: '捷克',    flag: '🇨🇿', pattern: /Czech|捷克|(?<!\w)CZ(?!\w)/i },
        { key: '匈牙利',  flag: '🇭🇺', pattern: /Hungary|匈牙利|(?<!\w)HU(?!\w)/i },
        { key: '罗马尼亚',flag: '🇷🇴', pattern: /Romania|罗马尼亚|(?<!\w)RO(?!\w)/i },
        { key: '乌克兰',  flag: '🇺🇦', pattern: /Ukraine|乌克兰|(?<!\w)UA(?!\w)/i },
        { key: '挪威',    flag: '🇳🇴', pattern: /Norway|挪威|(?<!\w)NO(?!\w)/i },
        { key: '丹麦',    flag: '🇩🇰', pattern: /Denmark|丹麦|(?<!\w)DK(?!\w)/i },
        { key: '瑞士',    flag: '🇨🇭', pattern: /Switzerland|瑞士|(?<!\w)CH(?!\w)/i },
        { key: '奥地利',  flag: '🇦🇹', pattern: /Austria|奥地利|(?<!\w)AT(?!\w)/i },
        { key: '西班牙',  flag: '🇪🇸', pattern: /Spain|西班牙|(?<!\w)ES(?!\w)/i },
        { key: '意大利',  flag: '🇮🇹', pattern: /Italy|意大利|(?<!\w)IT(?!\w)/i },
        { key: '葡萄牙',  flag: '🇵🇹', pattern: /Portugal|葡萄牙|(?<!\w)PT(?!\w)/i },
        { key: '马来西亚',flag: '🇲🇾', pattern: /Malaysia|马来西亚|(?<!\w)MY(?!\w)/i },
        { key: '越南',    flag: '🇻🇳', pattern: /Vietnam|越南|(?<!\w)VN(?!\w)/i },
        { key: '泰国',    flag: '🇹🇭', pattern: /Thailand|泰国|(?<!\w)TH(?!\w)/i },
        { key: '菲律宾',  flag: '🇵🇭', pattern: /Philippines|菲律宾|(?<!\w)PH(?!\w)/i },
        { key: '印尼',    flag: '🇮🇩', pattern: /Indonesia|印尼|印度尼西亚|(?<!\w)ID(?!\w)/i },
        { key: '阿联酋',  flag: '🇦🇪', pattern: /Emirates|阿联酋|(?<!\w)AE(?!\w)/i },
        { key: '沙特',    flag: '🇸🇦', pattern: /Saudi|沙特|(?<!\w)SA(?!\w)/i },
        { key: '阿根廷',  flag: '🇦🇷', pattern: /Argentina|阿根廷|(?<!\w)AR(?!\w)/i },
        { key: '墨西哥',  flag: '🇲🇽', pattern: /Mexico|墨西哥|(?<!\w)MX(?!\w)/i },
        { key: '南非',    flag: '🇿🇦', pattern: /South.?Africa|南非|(?<!\w)ZA(?!\w)/i },
        { key: '澳门',    flag: '🇲🇴', pattern: /Macao|Macau|澳门|(?<!\w)MO(?!\w)/i },
        { key: '爱沙尼亚',flag: '🇪🇪', pattern: /Estonia|爱沙尼亚|(?<!\w)EE(?!\w)/i },
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
