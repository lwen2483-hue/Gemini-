function operator(proxies) {
    const REGION_CONFIG = [
        // 亚洲
        { key: '香港',      flag: '🇭🇰', pattern: /HongKong|HONG.?KONG|HKG|xinyitang|CMLiussss|重置剩余|套餐到期|剩余流量|\bHK\b/i },
        { key: '台湾',      flag: '🇨🇳', pattern: /Taiwan|台湾|TWN|\bTW\b/i },
        { key: '日本',      flag: '🇯🇵', pattern: /Japan|日本|JPN|\bJP\b/i },
        { key: '新加坡',    flag: '🇸🇬', pattern: /Singapore|新加坡|SGP|\bSG\b/i },
        { key: '韩国',      flag: '🇰🇷', pattern: /Korea|韩国|\bKR\b/i },
        { key: '印度',      flag: '🇮🇳', pattern: /India|印度|\bIN\b/i },
        { key: '马来西亚',  flag: '🇲🇾', pattern: /Malaysia|马来西亚|\bMY\b/i },
        { key: '泰国',      flag: '🇹🇭', pattern: /Thailand|泰国|\bTH\b/i },
        { key: '越南',      flag: '🇻🇳', pattern: /Vietnam|越南|\bVN\b/i },
        { key: '菲律宾',    flag: '🇵🇭', pattern: /Philippines|菲律宾|\bPH\b/i },
        { key: '印尼',      flag: '🇮🇩', pattern: /Indonesia|印尼|印度尼西亚|\bID\b/i },
        { key: '澳门',      flag: '🇲🇴', pattern: /Macao|Macau|澳门|\bMO\b/i },
        { key: '孟加拉',    flag: '🇧🇩', pattern: /Bangladesh|孟加拉|\bBD\b/i },
        { key: '巴基斯坦',  flag: '🇵🇰', pattern: /Pakistan|巴基斯坦|\bPK\b/i },
        { key: '斯里兰卡',  flag: '🇱🇰', pattern: /SriLanka|Sri.?Lanka|斯里兰卡|\bLK\b/i },
        { key: '缅甸',      flag: '🇲🇲', pattern: /Myanmar|Burma|缅甸|\bMM\b/i },
        { key: '柬埔寨',    flag: '🇰🇭', pattern: /Cambodia|柬埔寨|\bKH\b/i },
        { key: '尼泊尔',    flag: '🇳🇵', pattern: /Nepal|尼泊尔|\bNP\b/i },
        { key: '蒙古',      flag: '🇲🇳', pattern: /Mongolia|蒙古|\bMN\b/i },
        { key: '哈萨克斯坦',flag: '🇰🇿', pattern: /Kazakhstan|哈萨克|\bKZ\b/i },
        { key: '乌兹别克斯坦', flag: '🇺🇿', pattern: /Uzbekistan|乌兹别克|\bUZ\b/i },
        { key: '吉尔吉斯斯坦', flag: '🇰🇬', pattern: /Kyrgyzstan|吉尔吉斯|\bKG\b/i },
        { key: '塔吉克斯坦',flag: '🇹🇯', pattern: /Tajikistan|塔吉克|\bTJ\b/i },
        { key: '土库曼斯坦',flag: '🇹🇲', pattern: /Turkmenistan|土库曼|\bTM\b/i },
        { key: '阿塞拜疆',  flag: '🇦🇿', pattern: /Azerbaijan|阿塞拜疆|\bAZ\b/i },
        { key: '格鲁吉亚',  flag: '🇬🇪', pattern: /Georgia|格鲁吉亚|\bGE\b/i },
        { key: '亚美尼亚',  flag: '🇦🇲', pattern: /Armenia|亚美尼亚|\bAM\b/i },

        // 中东
        { key: '阿联酋',    flag: '🇦🇪', pattern: /Emirates|阿联酋|\bAE\b/i },
        { key: '沙特',      flag: '🇸🇦', pattern: /Saudi|沙特|\bSA\b/i },
        { key: '土耳其',    flag: '🇹🇷', pattern: /Turkey|Turkiye|土耳其|\bTR\b/i },
        { key: '以色列',    flag: '🇮🇱', pattern: /Israel|以色列|\bIL\b/i },
        { key: '伊朗',      flag: '🇮🇷', pattern: /Iran|伊朗|\bIR\b/i },
        { key: '伊拉克',    flag: '🇮🇶', pattern: /Iraq|伊拉克|\bIQ\b/i },
        { key: '科威特',    flag: '🇰🇼', pattern: /Kuwait|科威特|\bKW\b/i },
        { key: '卡塔尔',    flag: '🇶🇦', pattern: /Qatar|卡塔尔|\bQA\b/i },
        { key: '巴林',      flag: '🇧🇭', pattern: /Bahrain|巴林|\bBH\b/i },
        { key: '约旦',      flag: '🇯🇴', pattern: /Jordan|约旦|\bJO\b/i },
        { key: '黎巴嫩',    flag: '🇱🇧', pattern: /Lebanon|黎巴嫩|\bLB\b/i },
        { key: '阿曼',      flag: '🇴🇲', pattern: /Oman|阿曼|\bOM\b/i },
        { key: '也门',      flag: '🇾🇪', pattern: /Yemen|也门|\bYE\b/i },

        // 北美
        { key: '美国',      flag: '🇺🇸', pattern: /United.?States|美国|IPV6|\bUS\b|\bUSA\b/i },
        { key: '加拿大',    flag: '🇨🇦', pattern: /Canada|加拿大|\bCA\b/i },
        { key: '墨西哥',    flag: '🇲🇽', pattern: /Mexico|墨西哥|\bMX\b/i },

        // 南美
        { key: '巴西',      flag: '🇧🇷', pattern: /Brazil|巴西|\bBR\b/i },
        { key: '阿根廷',    flag: '🇦🇷', pattern: /Argentina|阿根廷|\bAR\b/i },
        { key: '哥伦比亚',  flag: '🇨🇴', pattern: /Colombia|哥伦比亚|\bCO\b/i },
        { key: '智利',      flag: '🇨🇱', pattern: /Chile|智利|\bCL\b/i },
        { key: '秘鲁',      flag: '🇵🇪', pattern: /Peru|秘鲁|\bPE\b/i },
        { key: '委内瑞拉',  flag: '🇻🇪', pattern: /Venezuela|委内瑞拉|\bVE\b/i },
        { key: '厄瓜多尔',  flag: '🇪🇨', pattern: /Ecuador|厄瓜多尔|\bEC\b/i },
        { key: '玻利维亚',  flag: '🇧🇴', pattern: /Bolivia|玻利维亚|\bBO\b/i },
        { key: '巴拉圭',    flag: '🇵🇾', pattern: /Paraguay|巴拉圭|\bPY\b/i },
        { key: '乌拉圭',    flag: '🇺🇾', pattern: /Uruguay|乌拉圭|\bUY\b/i },

        // 欧洲西部
        { key: '英国',      flag: '🇬🇧', pattern: /United.?Kingdom|英国|\bUK\b|\bGB\b/i },
        { key: '德国',      flag: '🇩🇪', pattern: /Germany|德国|\bDE\b/i },
        { key: '法国',      flag: '🇫🇷', pattern: /France|法国|\bFR\b/i },
        { key: '荷兰',      flag: '🇳🇱', pattern: /Netherlands|荷兰|\bNL\b/i },
        { key: '瑞士',      flag: '🇨🇭', pattern: /Switzerland|瑞士|\bCH\b/i },
        { key: '瑞典',      flag: '🇸🇪', pattern: /Sweden|瑞典|\bSE\b/i },
        { key: '挪威',      flag: '🇳🇴', pattern: /Norway|挪威|\bNO\b/i },
        { key: '丹麦',      flag: '🇩🇰', pattern: /Denmark|丹麦|\bDK\b/i },
        { key: '芬兰',      flag: '🇫🇮', pattern: /Finland|芬兰|\bFI\b/i },
        { key: '西班牙',    flag: '🇪🇸', pattern: /Spain|西班牙|\bES\b/i },
        { key: '葡萄牙',    flag: '🇵🇹', pattern: /Portugal|葡萄牙|\bPT\b/i },
        { key: '意大利',    flag: '🇮🇹', pattern: /Italy|意大利|\bIT\b/i },
        { key: '奥地利',    flag: '🇦🇹', pattern: /Austria|奥地利|\bAT\b/i },
        { key: '比利时',    flag: '🇧🇪', pattern: /Belgium|比利时|\bBE\b/i },
        { key: '爱尔兰',    flag: '🇮🇪', pattern: /Ireland|爱尔兰|\bIE\b/i },
        { key: '卢森堡',    flag: '🇱🇺', pattern: /Luxembourg|卢森堡|\bLU\b/i },
        { key: '冰岛',      flag: '🇮🇸', pattern: /Iceland|冰岛|\bIS\b/i },

        // 欧洲东部
        { key: '俄罗斯',    flag: '🇷🇺', pattern: /Russia|俄罗斯|\bRU\b/i },
        { key: '波兰',      flag: '🇵🇱', pattern: /Poland|波兰|\bPL\b/i },
        { key: '捷克',      flag: '🇨🇿', pattern: /Czech|捷克|\bCZ\b/i },
        { key: '匈牙利',    flag: '🇭🇺', pattern: /Hungary|匈牙利|\bHU\b/i },
        { key: '罗马尼亚',  flag: '🇷🇴', pattern: /Romania|罗马尼亚|\bRO\b/i },
        { key: '保加利亚',  flag: '🇧🇬', pattern: /Bulgaria|保加利亚|\bBG\b/i },
        { key: '乌克兰',    flag: '🇺🇦', pattern: /Ukraine|乌克兰|\bUA\b/i },
        { key: '斯洛伐克',  flag: '🇸🇰', pattern: /Slovakia|斯洛伐克|\bSK\b/i },
        { key: '斯洛文尼亚',flag: '🇸🇮', pattern: /Slovenia|斯洛文尼亚|\bSI\b/i },
        { key: '克罗地亚',  flag: '🇭🇷', pattern: /Croatia|克罗地亚|\bHR\b/i },
        { key: '塞尔维亚',  flag: '🇷🇸', pattern: /Serbia|塞尔维亚|\bRS\b/i },
        { key: '希腊',      flag: '🇬🇷', pattern: /Greece|希腊|\bGR\b/i },
        { key: '拉脱维亚',  flag: '🇱🇻', pattern: /Latvia|拉脱维亚|\bLV\b/i },
        { key: '立陶宛',    flag: '🇱🇹', pattern: /Lithuania|立陶宛|\bLT\b/i },
        { key: '爱沙尼亚',  flag: '🇪🇪', pattern: /Estonia|爱沙尼亚|\bEE\b/i },
        { key: '白俄罗斯',  flag: '🇧🇾', pattern: /Belarus|白俄罗斯|\bBY\b/i },
        { key: '摩尔多瓦',  flag: '🇲🇩', pattern: /Moldova|摩尔多瓦|\bMD\b/i },
        { key: '阿尔巴尼亚',flag: '🇦🇱', pattern: /Albania|阿尔巴尼亚|\bAL\b/i },
        { key: '北马其顿',  flag: '🇲🇰', pattern: /Macedonia|北马其顿|\bMK\b/i },
        { key: '波黑',      flag: '🇧🇦', pattern: /Bosnia|波黑|波斯尼亚|\bBA\b/i },
        { key: '黑山',      flag: '🇲🇪', pattern: /Montenegro|黑山|\bME\b/i },

        // 大洋洲
        { key: '澳大利亚',  flag: '🇦🇺', pattern: /Australia|澳大利亚|\bAU\b/i },
        { key: '新西兰',    flag: '🇳🇿', pattern: /NewZealand|New.?Zealand|新西兰|\bNZ\b/i },

        // 非洲
        { key: '南非',      flag: '🇿🇦', pattern: /South.?Africa|南非|\bZA\b/i },
        { key: '埃及',      flag: '🇪🇬', pattern: /Egypt|埃及|\bEG\b/i },
        { key: '尼日利亚',  flag: '🇳🇬', pattern: /Nigeria|尼日利亚|\bNG\b/i },
        { key: '肯尼亚',    flag: '🇰🇪', pattern: /Kenya|肯尼亚|\bKE\b/i },
        { key: '埃塞俄比亚',flag: '🇪🇹', pattern: /Ethiopia|埃塞俄比亚|\bET\b/i },
        { key: '坦桑尼亚',  flag: '🇹🇿', pattern: /Tanzania|坦桑尼亚|\bTZ\b/i },
        { key: '摩洛哥',    flag: '🇲🇦', pattern: /Morocco|摩洛哥|\bMA\b/i },
        { key: '加纳',      flag: '🇬🇭', pattern: /Ghana|加纳|\bGH\b/i },
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
