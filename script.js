// ==================【增强版：随机提示语料库】==================
// 随机消息获取函数
function getRandomMessage(messages) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// 所有阶段的随机提示语
const stageMessages = {
    infancy: [ // 0-3岁
        "哇哦，一个人类幼崽！你现在的主线任务是：吃、睡、以及用哭声召唤你的“仆人”（也就是爸妈）。",
        "你好，地球Online的新玩家！你正在新手村体验“萌即正义”的被动技能，所有NPC都围着你转。",
        "你正在为家庭相册贡献海量素材，虽然你自己啥也记不住。你的专属座驾是婴儿车，司机兼保镖是爸妈。",
        "你的超能力是用一个笑容融化所有人的心，以及用一阵哭声让全家进入一级战备状态。",
        "你是一位专业的探险家，主要工具是你的嘴。万物皆可尝，世界就是你的磨牙棒！"
    ],
    kindergarten: [ // 3-6岁
        "幼儿园扛把子，你好！你的“工作”就是玩泥巴、搭积木和下午睡大觉。你是老师眼中的小可爱，也是游乐场上的“小霸王”。",
        "欢迎来到“社交启蒙”副本！在这里，你可以用一块糖果交到一个朋友，也可以用一场哭闹解决大部分问题。",
        "你的主要KPI是：今天有没有乖乖午睡，以及有没有抢到最喜欢的那个玩具。",
        "你坚信午睡是一种“酷刑”，但很多年后你会发现，那曾是天堂般的福利。",
        "你已被提升为“家庭首席提问官”，每日灵魂发问：“为什么呀？”"
    ],
    primarySchool: [ // 6-12岁
        "你好，红领巾少年！你已告别午睡的自由，正式开启了与“作业”这位朋友斗智斗勇的史诗篇章。",
        "你正在探索“为什么1+1=2”以及“小明到底有多少个问题”等世界级难题。加油，未来的科学家！",
        "别问“数学有什么用”，问就是为了以后算清楚压岁钱和游戏里的血量！",
        "你的书包是一个神奇的传送门，里面装着课本、半块橡皮、一个瘪了的乒乓球和宇宙的奥秘。",
        "你拥有了两重身份：父母眼中的乖孩子，以及和小伙伴们在操场上拯救世界的秘密英雄。"
    ],
    puberty: [ // 13-17岁
        "啊，传说中的青春期！你正在运行“成长的烦恼”资料片，享受着旺盛的精力和偶尔的叛逆。请记住，你的征途是星辰大海！",
        "你觉得自己是世界上最酷的人，同时又觉得没人懂你。别担心，我们都经历过。顺便说一句，你的发型很“特别”哦！",
        "你解锁了新技能：对父母的唠叨免疫力+50%，对朋友的黑话理解力+80%。",
        "你坚信你耳机里的音乐是全世界最好听的，并且对其他音乐嗤之以鼻。",
        "你的大脑正在升级，系统有点不稳定，表现为：间歇性踌躇满志，持续性懒得动弹。"
    ],
    youngAdult: [ // 18-21岁
        "恭喜，您已是一位成年人！拥有了投票权和独立的钥匙，世界正向您敞开大门！不过，也得自己洗袜子了。",
        "你获得了“自由”但附带“责任”的DLC。你可以在深夜打游戏，但第二天也得准时上课或上班。",
        "你合法成年了，但你的钱包和衣柜里的衣物还没跟上这个身份。",
        "你正在学习一项终极技能：如何在月底用仅剩的50块钱活一个星期。",
        "恭喜！你现在可以光明正大地做出自己的“错误”决定了！"
    ],
    earlyCareer: [ // 22-30岁
        "欢迎来到成人世界！您已踏入社会，开始用自己的双手打拼未来，每一份努力都算数！咖啡是你最好的朋友。",
        "你开始明白，小时候爸妈说的“我们都是为你好”并不全是客套话。你也开始计算“收到的份子钱何时能回本”。",
        "你正在从“学生思维”向“打工人思维”切换，升级过程可能会消耗大量睡眠和发量。",
        "你学会了使用“好的”、“收到”、“没问题”这三个词来应对90%的工作消息。",
        "你发现了“周日恐惧症”，这是一种关于周一即将到来的每周限定恐怖故事。"
    ],
    established: [ // 31-40岁
        "三十而立，风华正茂。无论是事业稳定家庭幸福，还是正在为自己的梦想创业，您都是人生中最闪亮的星！",
        "你开始对各种“超级英雄”电影无感，因为你发现自己就是家里的那个“超人”。",
        "你的购物车里，孩子的用品和养生产品逐渐取代了游戏和潮牌。",
        "一个安静的夜晚，已经比一场热闹的派对更具吸引力。恭喜，您已晋级！",
        "你现在能理解宜家家具的真正挑战：不是拼装，而是拼装时不和伴侣吵架。"
    ],
    midlife: [ // 41-50岁
        "人到中年，保温杯里泡枸杞。您现在是家庭的顶梁柱，也是单位里的老法师，人生经验值MAX！",
        "你已经能从一个眼神判断出孩子是不是在撒谎，从老板的语气里听出这个周末又要加班。",
        "你开始参加同学聚会，并惊讶地发现，当年的校草现在也开始脱发了。",
        "你解锁了一项被动技能：站起来的时候会发出“嗨哟”的配音。",
        "你比年轻时更懂得欣赏一双舒服的鞋，而不是一双好看的鞋。"
    ],
    preRetirement: [ // 51-60岁
        "恭喜您即将解锁“人生终极副本”——退休生活！现在您阅历丰富，眼光毒辣，江湖上早已充满您的传说！",
        "你对年轻人的“新潮玩意儿”不屑一顾，但手机P图和刷短视频却比谁都溜。",
        "你开始研究退休金怎么领，以及哪个公园的广场舞“流派”最正宗。",
        "你已经获得了随意给出人生建议的“黄金执照”，并且从不吝惜使用它。",
        "你已经开始为退休后的环球旅行（或者环小区旅行）做准备了。"
    ],
    retirement: [ // 60+
        "恭喜！您已是“养生圈”的资深VIP。今天的任务：公园散步打卡，晚七点准时收看健康节目，以及提醒子女多穿衣服。",
        "您的身体是您最宝贵的“革命本钱”。记住“早餐好、午餐饱、晚餐少”的黄金法则，外加每天八杯水，健康一百岁！",
        "您现在的人生哲学是：能坐着不站着，能躺着不坐着。这不是懒，这是“节能养生”。保持好心情，是最好的长寿秘诀！",
        "解锁退休生活，意味着您有大把的时间去探索新爱好：钓鱼、书法、广场舞...或者，成为小区里消息最灵通的情报中心！",
        "您现在是时间的富翁。愿您把每一天都过成诗，步履不停，笑口常开，享受这“无限续杯”的悠闲时光。"
    ]
};
// ==========================================================

// 为自定义日期输入框添加自动跳转逻辑
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
const calculateBtn = document.getElementById('calculate-btn');

function setupAutofocus() {
    yearInput.addEventListener('input', () => {
        if (yearInput.value.length === yearInput.maxLength) {
            monthInput.focus();
        }
    });

    monthInput.addEventListener('input', () => {
        if (monthInput.value.length === monthInput.maxLength) {
            dayInput.focus();
        }
    });

    dayInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            calculateBtn.click();
        }
    });
}
setupAutofocus();

// 主计算逻辑
calculateBtn.addEventListener('click', () => {
    // --- 1. 获取和验证日期 ---
    const year = yearInput.value.trim();
    const month = monthInput.value.trim();
    const day = dayInput.value.trim();
    const errorMessage = document.getElementById('error-message');
    const resultsDiv = document.getElementById('results');
    if (!year || !month || !day) {
        errorMessage.textContent = '请完整输入您的出生日期！';
        errorMessage.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }
    const birthDateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const birthDate = new Date(birthDateStr);
    if (isNaN(birthDate.getTime()) || birthDate.toISOString().slice(0, 10) !== birthDateStr) {
        errorMessage.textContent = '您输入的日期无效，请检查后重试。';
        errorMessage.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }
    const today = new Date();
    birthDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (birthDate > today) {
        // ... 未来日期的逻辑保持不变 ...
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const diffYears = (birthDate - today) / MS_PER_DAY / 365.25;
        let futureMessage = '';
        if (diffYears * 12 <= 9) {
            futureMessage = '哇，未来的宝宝！您现在应该还在妈妈的肚子里听音乐、练拳脚吧？别急，外面很精彩！';
        } else if (diffYears <= 2) {
            futureMessage = '时空旅行者你好！按这个时间点，你的爸妈可能刚领完证，正在规划蜜月旅行呢。你的“订单”已提交，请耐心等待发货！';
        } else if (diffYears <= 5) {
            futureMessage = '这个时间点，你的爸妈可能正处于热恋期，还在看电影、约会、吵吵小架。你的存在，也许还是他们未来计划中的一个“小惊喜”哦！';
        } else if (diffYears <= 15) {
            futureMessage = '时空跳跃有点远了！此时你的爸妈可能还在为中考或高考奋斗，说不定正在为一道数学题发愁。他们可能认识，也可能还在各自的青春里。';
        } else if (diffYears <= 22) {
            futureMessage = '超光速警告！在这个时间点，你的爸妈自己都还是未成年人，正忙着长大和被爸妈“混合双打”呢。你的“预购”请求过于超前了！';
        } else {
            futureMessage = '我的天，你这是从哪个世纪来的？！按这个时间线，你的爸妈可能还是......液体。嗯，你懂的。他们自己都还是个生物学上的概念呢！';
        }
        errorMessage.textContent = futureMessage;
        errorMessage.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }

    errorMessage.classList.add('hidden');
    resultsDiv.classList.remove('hidden');

    // --- 2. 定义常量 ---
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const DAYS_PER_YEAR = 365.25;
    const ADULT_AGE = 18;
    const PUBERTY_START_AGE = 13;
    const PRIMARY_SCHOOL_END_AGE = 12;
    const KINDERGARTEN_END_AGE = 6;
    const INFANCY_END_AGE = 3;
    const RETIREMENT_MESSAGE_AGE = 60;
    const STUDY_START_AGE = 6;
    const STUDY_END_AGE = 22;
    const WORK_START_AGE = 22;
    const RETIREMENT_AGE = 65;
    const LIFE_EXPECTANCY_AGE = 80;
    const FAMILY_TIME_RATIO = 0.22;

    // --- 3. 核心计算 ---
    const totalDaysLived = Math.floor((today - birthDate) / MS_PER_DAY);
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        ageYears--;
    }

    // --- 4. 更新页面内容 ---
    document.getElementById('current-age-summary').innerHTML = 
        `您已在这个世界上度过了 <strong>${totalDaysLived.toLocaleString()}</strong> 天，当前年龄为 <strong>${ageYears}</strong> 岁。`;
    
    // --- 根据年龄显示随机提示语 ---
    const adultStatus = document.getElementById('adult-status');
    if (ageYears >= RETIREMENT_MESSAGE_AGE) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.retirement);
        adultStatus.style.color = '#007bff';
    } else if (ageYears >= 51) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.preRetirement);
        adultStatus.style.color = '#fd7e14';
    } else if (ageYears >= 41) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.midlife);
        adultStatus.style.color = '#6f42c1';
    } else if (ageYears >= 31) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.established);
        adultStatus.style.color = '#007bff';
    } else if (ageYears >= 22) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.earlyCareer);
        adultStatus.style.color = '#28a745';
    } else if (ageYears >= ADULT_AGE) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.youngAdult);
        adultStatus.style.color = 'green';
    } else if (ageYears >= PUBERTY_START_AGE) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.puberty);
        adultStatus.style.color = '#20c997';
    } else if (ageYears >= KINDERGARTEN_END_AGE) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.primarySchool);
        adultStatus.style.color = '#ffc107';
    } else if (ageYears >= INFANCY_END_AGE) {
        adultStatus.innerHTML = getRandomMessage(stageMessages.kindergarten);
        adultStatus.style.color = '#ff69b4';
    } else {
        adultStatus.innerHTML = getRandomMessage(stageMessages.infancy);
        adultStatus.style.color = '#add8e6';
    }
    
    // ... [后续计算和显示逻辑保持不变] ...
    const growthEndDate = new Date(birthDate);
    growthEndDate.setFullYear(birthDate.getFullYear() + ADULT_AGE);
    const growthDays = Math.floor((Math.min(today, growthEndDate) - birthDate) / MS_PER_DAY);
    const studyStartDate = new Date(birthDate);
    studyStartDate.setFullYear(birthDate.getFullYear() + STUDY_START_AGE);
    const studyEndDate = new Date(birthDate);
    studyEndDate.setFullYear(birthDate.getFullYear() + STUDY_END_AGE);
    let studyDays = 0;
    if (today > studyStartDate) {
        studyDays = Math.floor((Math.min(today, studyEndDate) - studyStartDate) / MS_PER_DAY);
    }
    const workStartDate = new Date(birthDate);
    workStartDate.setFullYear(birthDate.getFullYear() + WORK_START_AGE);
    const retirementDate = new Date(birthDate);
    retirementDate.setFullYear(birthDate.getFullYear() + RETIREMENT_AGE);
    let workDays = 0;
    if (today > workStartDate) {
        workDays = Math.floor((Math.min(today, retirementDate) - workStartDate) / MS_PER_DAY);
    }
    const familyDays = Math.floor(totalDaysLived * FAMILY_TIME_RATIO);
    const deathDate = new Date(birthDate);
    deathDate.setFullYear(birthDate.getFullYear() + LIFE_EXPECTANCY_AGE);
    const totalLifeDays = LIFE_EXPECTANCY_AGE * DAYS_PER_YEAR;
    const progressBar = document.getElementById('life-progress-bar');
    const lifeProgressText = document.getElementById('life-progress-text');
    const lifeRemaining = document.getElementById('life-remaining');
    progressBar.classList.remove('bonus');
    if (today < deathDate) {
        const remainingDays = Math.floor((deathDate - today) / MS_PER_DAY);
        const progress = totalDaysLived / totalLifeDays;
        progressBar.style.width = `${progress * 100}%`;
        lifeProgressText.textContent = `生命已走过 ${(progress * 100).toFixed(2)}%`;
        lifeRemaining.innerHTML = `假如活到80岁，您的生命还剩下约 <strong>${remainingDays.toLocaleString()}</strong> 天（≈${(remainingDays / DAYS_PER_YEAR).toFixed(1)}年）。`;
    } else {
        const bonusDays = Math.floor((today - deathDate) / MS_PER_DAY);
        const bonusYears = (bonusDays / DAYS_PER_YEAR).toFixed(1);
        progressBar.style.width = '100%';
        progressBar.classList.add('bonus');
        lifeProgressText.textContent = '生命进度已超越100%，恭喜！';
        lifeRemaining.innerHTML = `<strong>福寿绵长，生命的奇迹！</strong><br>您已荣耀地超越80岁，您生命中的每一天都是一份珍贵的礼物。<br>您已在80岁的基础上，额外走过了 <strong>${bonusDays.toLocaleString()}</strong> 天（约 ${bonusYears} 年）。<br>愿您日日安康，笑口常开！`;
    }
    const formatCard = (title, days) => {
        const years = (days / DAYS_PER_YEAR).toFixed(1);
        return `<div class="card-title">${title}</div>您已用去 <strong>${days.toLocaleString()}</strong> 天<br>约等于 <strong>${years}</strong> 年`;
    };
    document.getElementById('growth-time').innerHTML = formatCard('🌱 成长时光', growthDays);
    document.getElementById('study-time').innerHTML = formatCard('📚 学习时光', Math.max(0, studyDays));
    document.getElementById('work-time').innerHTML = formatCard('💼 工作时光', Math.max(0, workDays));
    document.getElementById('family-time').innerHTML = formatCard('❤️ 陪伴家人', familyDays);
});