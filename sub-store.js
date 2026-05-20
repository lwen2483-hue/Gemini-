function operator(proxies) {
    const REGION_CONFIG = [
        // 亚洲
        { key: '香港',      flag: '🇭🇰', pattern: /HongKong|HONG.?KONG|HKG|xinyitang|CMLiussss|重置剩余|套餐到期|剩余流量|(?<![a-zA-Z])HK(?![a-zA-Z])/i },
        { key: '台湾',      flag: '🇨🇳', pattern: /Taiwan|台湾|TWN|(?<![a-zA-Z])TW(?![a-zA-Z])/i },
        { key: '日本',      flag: '🇯🇵', pattern: /Japan|日本|JPN|(?<![a-zA-Z])JP(?![a-zA-Z])/i },
        { key: '新加坡',    flag: '🇸🇬', pattern: /Singapore|新加坡|SGP|(?<![a-zA-Z])SG(?![a-zA-Z])/i },
        { key: '韩国',      flag: '🇰🇷', pattern: /Korea|韩国|(?<![a-zA-Z])KR(?![a-zA-Z])/i },
        { key: '印度',      flag: '🇮🇳', pattern: /India|印度|(?<![a-zA-Z])IN(?![a-zA-Z])/i },
        { key: '马来西亚',  flag: '🇲🇾', pattern: /Malaysia|马来西亚|(?<![a-zA-Z])MY(?![a-zA-Z])/i },
        { key: '泰国',      flag: '🇹🇭', pattern: /Thailand|泰国|(?<![a-zA-Z])TH(?![a-zA-Z])/i },
        { key: '越南',      flag: '🇻🇳', pattern: /Vietnam|越南|(?<![a-zA-Z])VN(?![a-zA-Z])/i },
        { key: '菲律宾',    flag: '🇵🇭', pattern: /Philippines|菲律宾|(?<![a-zA-Z])PH(?![a-zA-Z])/i },
        { key: '印尼',      flag: '🇮🇩', pattern: /Indonesia|印尼|印度尼西亚|(?<![a-zA-Z])ID(?![a-zA-Z])/i },
        { key: '澳门',      flag: '🇲🇴', pattern: /Macao|Macau|澳门|(?<![a-zA-Z])MO(?![a-zA-Z])/i },
        { key: '孟加拉',    flag: '🇧🇩', pattern: /Bangladesh|孟加拉|(?<![a-zA-Z])BD(?![a-zA-Z])/i },
        { key: '巴基斯坦',  flag: '🇵🇰', pattern: /Pakistan|巴基斯坦|(?<![a-zA-Z])PK(?![a-zA-Z])/i },
        { key: '斯里兰卡',  flag: '🇱🇰', pattern: /SriLanka|Sri.?Lanka|斯里兰卡|(?<![a-zA-Z])LK(?![a-zA-Z])/i },
        { key: '缅甸',      flag: '🇲🇲', pattern: /Myanmar|Burma|缅甸|(?<![a-zA-Z])MM(?![a-zA-Z])/i },
        { key: '柬埔寨',    flag: '🇰🇭', pattern: /Cambodia|柬埔寨|(?<![a-zA-Z])KH(?![a-zA-Z])/i },
        { key: '尼泊尔',    flag: '🇳🇵', pattern: /Nepal|尼泊尔|(?<![a-zA-Z])NP(?![a-zA-Z])/i },
        { key: '蒙古',      flag: '🇲🇳', pattern: /Mongolia|蒙古|(?<![a-zA-Z])MN(?![a-zA-Z])/i },
        { key: '哈萨克斯坦',flag: '🇰🇿', pattern: /Kazakhstan|哈萨克|(?<![a-zA-Z])KZ(?![a-zA-Z])/i },
        { key: '乌兹别克斯坦', flag: '🇺🇿', pattern: /Uzbekistan|乌兹别克|(?<![a-zA-Z])UZ(?![a-zA-Z])/i },
        { key: '吉尔吉斯斯坦', flag: '🇰🇬', pattern: /Kyrgyzstan|吉尔吉斯|(?<![a-zA-Z])KG(?![a-zA-Z])/i },
        { key: '塔吉克斯坦',flag: '🇹🇯', pattern: /Tajikistan|塔吉克|(?<![a-zA-Z])TJ(?![a-zA-Z])/i },
        { key: '土库曼斯坦',flag: '🇹🇲', pattern: /Turkmenistan|土库曼|(?<![a-zA-Z])TM(?![a-zA-Z])/i },
        { key: '阿塞拜疆',  flag: '🇦🇿', pattern: /Azerbaijan|阿塞拜疆|(?<![a-zA-Z])AZ(?![a-zA-Z])/i },
        { key: '格鲁吉亚',  flag: '🇬🇪', pattern: /Georgia|格鲁吉亚|(?<![a-zA-Z])GE(?![a-zA-Z])/i },
        { key: '亚美尼亚',  flag: '🇦🇲', pattern: /Armenia|亚美尼亚|(?<![a-zA-Z])AM(?![a-zA-Z])/i },

        // 中东
        { key: '阿联酋',    flag: '🇦🇪', pattern: /Emirates|阿联酋|(?<![a-zA-Z])AE(?![a-zA-Z])/i },
        { key: '沙特',      flag: '🇸🇦', pattern: /Saudi|沙特|(?<![a-zA-Z])SA(?![a-zA-Z])/i },
        { key: '土耳其',    flag: '🇹🇷', pattern: /Turkey|Turkiye|土耳其|(?<![a-zA-Z])TR(?![a-zA-Z])/i },
        { key: '以色列',    flag: '🇮🇱', pattern: /Israel|以色列|(?<![a-zA-Z])IL(?![a-zA-Z])/i },
        { key: '伊朗',      flag: '🇮🇷', pattern: /Iran|伊朗|(?<![a-zA-Z])IR(?![a-zA-Z])/i },
        { key: '伊拉克',    flag: '🇮🇶', pattern: /Iraq|伊拉克|(?<![a-zA-Z])IQ(?![a-zA-Z])/i },
        { key: '科威特',    flag: '🇰🇼', pattern: /Kuwait|科威特|(?<![a-zA-Z])KW(?![a-zA-Z])/i },
        { key: '卡塔尔',    flag: '🇶🇦', pattern: /Qatar|卡塔尔|(?<![a-zA-Z])QA(?![a-zA-Z])/i },
        { key: '巴林',      flag: '🇧🇭', pattern: /Bahrain|巴林|(?<![a-zA-Z])BH(?![a-zA-Z])/i },
        { key: '约旦',      flag: '🇯🇴', pattern: /Jordan|约旦|(?<![a-zA-Z])JO(?![a-zA-Z])/i },
        { key: '黎巴嫩',    flag: '🇱🇧', pattern: /Lebanon|黎巴嫩|(?<![a-zA-Z])LB(?![a-zA-Z])/i },
        { key: '阿曼',      flag: '🇴🇲', pattern: /Oman|阿曼|(?<![a-zA-Z])OM(?![a-zA-Z])/i },
        { key: '也门',      flag: '🇾🇪', pattern: /Yemen|也门|(?<![a-zA-Z])YE(?![a-zA-Z])/i },

        // 北美
        { key: '美国',      flag: '🇺🇸', pattern: /United.?States|美国|IPV6|(?<![a-zA-Z])USA(?![a-zA-Z])|(?<![a-zA-Z])US(?![a-zA-Z])/i },
        { key: '加拿大',    flag: '🇨🇦', pattern: /Canada|加拿大|(?<![a-zA-Z])CA(?![a-zA-Z])/i },
        { key: '墨西哥',    flag: '🇲🇽', pattern: /Mexico|墨西哥|(?<![a-zA-Z])MX(?![a-zA-Z])/i },

        // 南美
        { key: '巴西',      flag: '🇧🇷', pattern: /Brazil|巴西|(?<![a-zA-Z])BR(?![a-zA-Z])/i },
        { key: '阿根廷',    flag: '🇦🇷', pattern: /Argentina|阿根廷|(?<![a-zA-Z])AR(?![a-zA-Z])/i },
        { key: '哥伦比亚',  flag: '🇨🇴', pattern: /Colombia|哥伦比亚|(?<![a-zA-Z])CO(?![a-zA-Z])/i },
        { key: '智利',      flag: '🇨🇱', pattern: /Chile|智利|(?<![a-zA-Z])CL(?![a-zA-Z])/i },
        { key: '秘鲁',      flag: '🇵🇪', pattern: /Peru|秘鲁|(?<![a-zA-Z])PE(?![a-zA-Z])/i },
        { key: '委内瑞拉',  flag: '🇻🇪', pattern: /Venezuela|委内瑞拉|(?<![a-zA-Z])VE(?![a-zA-Z])/i },
        { key: '厄瓜多尔',  flag: '🇪🇨', pattern: /Ecuador|厄瓜多尔|(?<![a-zA-Z])EC(?![a-zA-Z])/i },
        { key: '玻利维亚',  flag: '🇧🇴', pattern: /Bolivia|玻利维亚|(?<![a-zA-Z])BO(?![a-zA-Z])/i },
        { key: '巴拉圭',    flag: '🇵🇾', pattern: /Paraguay|巴拉圭|(?<![a-zA-Z])PY(?![a-zA-Z])/i },
        { key: '乌拉圭',    flag: '🇺🇾', pattern: /Uruguay|乌拉圭|(?<![a-zA-Z])UY(?![a-zA-Z])/i },

        // 欧洲西部
        { key: '英国',      flag: '🇬🇧', pattern: /United.?Kingdom|英国|(?<![a-zA-Z])UK(?![a-zA-Z])|(?<![a-zA-Z])GB(?![a-zA-Z])/i },
        { key: '德国',      flag: '🇩🇪', pattern: /Germany|德国|(?<![a-zA-Z])DE(?![a-zA-Z])/i },
        { key: '法国',      flag: '🇫🇷', pattern: /France|法国|(?<![a-zA-Z])FR(?![a-zA-Z])/i },
        { key: '荷兰',      flag: '🇳🇱', pattern: /Netherlands|荷兰|(?<![a-zA-Z])NL(?![a-zA-Z])/i },
        { key: '瑞士',      flag: '🇨🇭', pattern: /Switzerland|瑞士|(?<![a-zA-Z])CH(?![a-zA-Z])/i },
        { key: '瑞典',      flag: '🇸🇪', pattern: /Sweden|瑞典|(?<![a-zA-Z])SE(?![a-zA-Z])/i },
        { key: '挪威',      flag: '🇳🇴', pattern: /Norway|挪威|(?<![a-zA-Z])NO(?![a-zA-Z])/i },
        { key: '丹麦',      flag: '🇩🇰', pattern: /Denmark|丹麦|(?<![a-zA-Z])DK(?![a-zA-Z])/i },
        { key: '芬兰',      flag: '🇫🇮', pattern: /Finland|芬兰|(?<![a-zA-Z])FI(?![a-zA-Z])/i },
        { key: '西班牙',    flag: '🇪🇸', pattern: /Spain|西班牙|(?<![a-zA-Z])ES(?![a-zA-Z])/i },
        { key: '葡萄牙',    flag: '🇵🇹', pattern: /Portugal|葡萄牙|(?<![a-zA-Z])PT(?![a-zA-Z])/i },
        { key: '意大利',    flag: '🇮🇹', pattern: /Italy|意大利|(?<![a-zA-Z])IT(?![a-zA-Z])/i },
        { key: '奥地利',    flag: '🇦🇹', pattern: /Austria|奥地利|(?<![a-zA-Z])AT(?![a-zA-Z])/i },
        { key: '比利时',    flag: '🇧🇪', pattern: /Belgium|比利时|(?<![a-zA-Z])BE(?![a-zA-Z])/i },
        { key: '爱尔兰',    flag: '🇮🇪', pattern: /Ireland|爱尔兰|(?<![a-zA-Z])IE(?![a-zA-Z])/i },
        { key: '卢森堡',    flag: '🇱🇺', pattern: /Luxembourg|卢森堡|(?<![a-zA-Z])LU(?![a-zA-Z])/i },
        { key: '冰岛',      flag: '🇮🇸', pattern: /Iceland|冰岛|(?<![a-zA-Z])IS(?![a-zA-Z])/i },

        // 欧洲东部
        { key: '俄罗斯',    flag: '🇷🇺', pattern: /Russia|俄罗斯|(?<![a-zA-Z])RU(?![a-zA-Z])/i },
        { key: '波兰',      flag: '🇵🇱', pattern: /Poland|波兰|(?<![a-zA-Z])PL(?![a-zA-Z])/i },
        { key: '捷克',      flag: '🇨🇿', pattern: /Czech|捷克|(?<![a-zA-Z])CZ(?![a-zA-Z])/i },
        { key: '匈牙利',    flag: '🇭🇺', pattern: /Hungary|匈牙利|(?<![a-zA-Z])HU(?![a-zA-Z])/i },
        { key: '罗马尼亚',  flag: '🇷🇴', pattern: /Romania|罗马尼亚|(?<![a-zA-Z])RO(?![a-zA-Z])/i },
        { key: '保加利亚',  flag: '🇧🇬', pattern: /Bulgaria|保加利亚|(?<![a-zA-Z])BG(?![a-zA-Z])/i },
        { key: '乌克兰',    flag: '🇺🇦', pattern: /Ukraine|乌克兰|(?<![a-zA-Z])UA(?![a-zA-Z])/i },
        { key: '斯洛伐克',  flag: '🇸🇰', pattern: /Slovakia|斯洛伐克|(?<![a-zA-Z])SK(?![a-zA-Z])/i },
        { key: '斯洛文尼亚',flag: '🇸🇮', pattern: /Slovenia|斯洛文尼亚|(?<![a-zA-Z])SI(?![a-zA-Z])/i },
        { key: '克罗地亚',  flag: '🇭🇷', pattern: /Croatia|克罗地亚|(?<![a-zA-Z])HR(?![a-zA-Z])/i },
        { key: '塞尔维亚',  flag: '🇷🇸', pattern: /Serbia|塞尔维亚|(?<![a-zA-Z])RS(?![a-zA-Z])/i },
        { key: '希腊',      flag: '🇬🇷', pattern: /Greece|希腊|(?<![a-zA-Z])GR(?![a-zA-Z])/i },
        { key: '拉脱维亚',  flag: '🇱🇻', pattern: /Latvia|拉脱维亚|(?<![a-zA-Z])LV(?![a-zA-Z])/i },
        { key: '立陶宛',    flag: '🇱🇹', pattern: /Lithuania|立陶宛|(?<![a-zA-Z])LT(?![a-zA-Z])/i },
        { key: '爱沙尼亚',  flag: '🇪🇪', pattern: /Estonia|爱沙尼亚|(?<![a-zA-Z])EE(?![a-zA-Z])/i },
        { key: '白俄罗斯',  flag: '🇧🇾', pattern: /Belarus|白俄罗斯|(?<![a-zA-Z])BY(?![a-zA-Z])/i },
        { key: '摩尔多瓦',  flag: '🇲🇩', pattern: /Moldova|摩尔多瓦|(?<![a-zA-Z])MD(?![a-zA-Z])/i },
        { key: '阿尔巴尼亚',flag: '🇦🇱', pattern: /Albania|阿尔巴尼亚|(?<![a-zA-Z])AL(?![a-zA-Z])/i },
        { key: '北马其顿',  flag: '🇲🇰', pattern: /Macedonia|北马其顿|(?<![a-zA-Z])MK(?![a-zA-Z])/i },
        { key: '波黑',      flag: '🇧🇦', pattern: /Bosnia|波黑|波斯尼亚|(?<![a-zA-Z])BA(?![a-zA-Z])/i },
        { key: '黑山',      flag: '🇲🇪', pattern: /Montenegro|黑山|(?<![a-zA-Z])ME(?![a-zA-Z])/i },

        // 大洋洲
        { key: '澳大利亚',  flag: '🇦🇺', pattern: /Australia|澳大利亚|(?<![a-zA-Z])AU(?![a-zA-Z])/i },
        { key: '新西兰',    flag: '🇳🇿', pattern: /NewZealand|New.?Zealand|新西兰|(?<![a-zA-Z])NZ(?![a-zA-Z])/i },

        // 非洲
        { key: '南非',      flag: '🇿🇦', pattern: /South.?Africa|南非|(?<![a-zA-Z])ZA(?![a-zA-Z])/i },
        { key: '埃及',      flag: '🇪🇬', pattern: /Egypt|埃及|(?<![a-zA-Z])EG(?![a-zA-Z])/i },
        { key: '尼日利亚',  flag: '🇳🇬', pattern: /Nigeria|尼日利亚|(?<![a-zA-Z])NG(?![a-zA-Z])/i },
        { key: '肯尼亚',    flag: '🇰🇪', pattern: /Kenya|肯尼亚|(?<![a-zA-Z])KE(?![a-zA-Z])/i },
        { key: '埃塞俄比亚',flag: '🇪🇹', pattern: /Ethiopia|埃塞俄比亚|(?<![a-zA-Z])ET(?![a-zA-Z])/i },
        { key: '坦桑尼亚',  flag: '🇹🇿', pattern: /Tanzania|坦桑尼亚|(?<![a-zA-Z])TZ(?![a-zA-Z])/i },
        { key: '摩洛哥',    flag: '🇲🇦', pattern: /Morocco|摩洛哥|(?<![a-zA-Z])MA(?![a-zA-Z])/i },
        { key: '加纳',      flag: '🇬🇭', pattern: /Ghana|加纳|(?<![a-zA-Z])GH(?![a-zA-Z])/i },
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
