document.addEventListener('DOMContentLoaded', () => {

    // --- スマホ用ナビゲーション制御 ---
    const navToggle = document.querySelector('.nav-toggle');
    const overlay = document.querySelector('.overlay');
    const sideNav = document.querySelector('.side-nav');

    const closeNav = () => {
        document.body.classList.remove('nav-open');
    };

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', closeNav);
    }
    if (sideNav) {
        // ナビゲーション内のリンクをクリックしたら閉じる
        sideNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                closeNav();
            }
        });
    }

    // --- 全設定データ ---
    const guideData = {
        philosophy: `
            <h3>かなめの視点</h3>
            <p>この物語は、徹頭徹尾、主人公「かなめ」の視点とモノローグで語られます。彼の「やれやれ」というフィルターを通すことで、どんな非日常的な出来事も、親しみやすいコメディに昇華されます。</p>
            <h3>黄金比率</h3>
            <p>物語の構成は、<strong>「ドタバタコメディ 70%」「心温まる日常 20%」「根幹のファンタジー 10%」</strong>の比率を意識しています。基本は笑える話ですが、ふとした瞬間にキャラクターたちの絆や成長が描かれ、その背景には神秘的な世界が広がっている…という奥行きを目指します。</p>
            <h3>テーマ</h3>
            <p>「退屈な日常」を望んでいた主人公が、「面倒でかけがえのない非日常」の中に、本当の「居場所」と心の平穏を見つけていく物語です。</p>
        `,
        characters: {
            kaname: {
                name: "かなめ (要)",
                role: "主人公 / 語り部 / ツッコミ役",
                personality: "達観系現実主義者。平穏を愛するが、押しに弱く、結局は面倒を見るお人好し。心の声(モノローグ)ではキレッキレのツッコミを入れる。",
                secret: "祖父の死を受け入れているようで受け入れきれていない。ふとした瞬間に気持ちが込み上げてくる",
                relationships: "全てのキャラクターを繋ぐハブ(中心)。すなみには振り回され、いづねを守り、しのねとは腹を探り合い、かおりとは苦労を分かち合う。"
            },
            sunami: {
                name: "すなみ",
                role: "ヒロイン① / トラブルメーカー",
                personality: "元気でポジティブな巫女。考えるより先に体が動く。",
                secret: "頭のお札は対悪霊用の決戦兵器だが、この世界に悪霊はいないため宝の持ち腐れ。",
                relationships: "かなめを無茶振りに巻き込むが、誰よりも信頼している戦友。他の女子とは、姉妹のように賑やかに過ごす。"
            },
            izune: {
                name: "いづね",
                role: "ヒロイン② / 不思議ちゃん",
                personality: "のんびりマイペース。ラグドール(猫)がモチーフ。いつも眠たそう。口数が少ないが、行動で意思を示す。感情で動く猫の帽子がアイテム。",
                secret: "双子のしのねとは、言葉なくとも通じ合っている。",
                relationships: "かなめの隣を一番の安らぎの場所としている。"
            },
            shinone: {
                name: "しのね",
                role: "ヒロイン③ / クールな参謀",
                personality: "サイベリアン(猫)がモチーフの、いづねの双子。寡黙でクールだが、口を開くと「〜だわ」という上品な女性語を使う。物事の本質を見抜く。",
                secret: "物事の本質を見抜く眼を持つ。",
                relationships: "かなめのことを「面白い観察対象」として意識している。"
            },
            kaori: {
                name: "かおり",
                role: "ヒロイン④ / 達観した先輩",
                personality: "モチーフは鹿。フラットで落ち着いたタメ口(「〜だよ」)を話す。常識的で面倒見が良いが、物事を達観している。",
                secret: "致命的な方向音痴(森の外限定)。",
                relationships: "かなめとは「常識人同盟」として、他のメンバーへのツッコミや愚痴を共有できる唯一の同志。他の女子たちにとっては、頼れるお姉さん。"
            },
            tachibana: {
                name: "橘さん",
                role: "ご隠居 / 策士",
                personality: "神社の先代神主。一見、穏やかな好々爺だが、全てをお見通しの策士。",
                secret: "物語のトラブルは、元を辿ればこの人が仕組んでいることも多い。",
                relationships: "かなめを後継者にするため、様々な口実で彼を試したり、導いたりする。"
            }
        },
        world: `
            <h3>陽向（ひなた）神社</h3>
            <p>物語の主な舞台。米子市、住宅街の裏手にある小さな山(丘)の上に鎮座している。石段の参道は長く、木々に覆われていて、昼でも少し薄暗い。登り切ると、俗世から切り離されたような、静かで神聖な空気が漂う。</p>
            <ul>
                <li><strong>別名:</strong> 地元の古老からは、昔の地名にちなんで「綾杜(あやのもり)神社」と呼ばれることもある。</li>
                <li><strong>拝殿の縁側:</strong> かなめがお茶を飲んだり、みんなが集まったりする、この物語の最も重要なホームポジション。</li>
            </ul>
            <h3>綾杜（あやのもり）</h3>
            <p>神社の裏に広がる神秘的な森。古くから<strong>「神域」</strong>とされ、普通の人間は道に迷いやすい。しかし、かおりにとっては自分の庭のような場所。季節の薬草や、珍しいキノコ、美味しい木の実などが豊富に採れる。森の中心には、樹齢数百年を数える巨大な御神木がある。</p>
            <h3>ファンタジー要素</h3>
            <p>この世界では、神様や精霊、あやかしといった存在は<strong>「いるけど、普通の人には見えない・認識できない」</strong>のが基本。陽向神社は、そういった存在と現世との「境界」が少しだけ曖昧になっているパワースポットである。すなみ、いづね、しのね、かおりは、人間に近い姿形をしているが、その本質は神様や精霊に近い、高位の存在。</p>
        `,
        plot: `
            <h3>長編</h3>
            <p>両親と祖父を亡くした主人公・かなめは、鳥取県の米子市で祖父の旧友である橘さんが神主を務める「陽向神社」に引き取られ、天真爛漫な孫娘・すなみ、ミステリアスな双子の姉妹・しのねといづね、そして神社の森を守るかおりと共に新たな日常を過ごし始める。当初は祖父の死を受け入れられずにいたかなめだが、騒がしくも温かい日々の中で、少しずつ笑顔を取り戻していく。</p>
            <p>そんなある日、米子市の空に突如、巨大な“青い亀裂”が出現する。それは、亡くなった人々が帰ってくる奇跡の入り口であり、街中は愛する者との再会に沸き立つ。かなめもまた、失われたはずの祖父との温かい時間を再体験し、幸せな日常を満喫する。</p>
            <p>しかし、その奇跡は長く続かなかった。亀裂は拡大し、地震や停電といった物理的な異常を引き起こし、人々を過去の幻影に囚われさせ、街を「停滞」の危機に陥れていく。しのねは亀裂の正体が「過去への執着」であると見抜き、世界が停滞する前に解決すべきだと警告する。すなみも事態を解決しようと奔走するが、かなめは祖父との幸せな時間を手放せず、心が揺れ動く。この葛藤が、すなみとの決定的な衝突を生んでしまう。</p>
            <p>衝突後、亀裂に飲み込まれてしまったかなめは、過去の記憶が再構築された偽りの祖父の家で目覚め、幼い頃の心身に戻ってしまう。そこで祖父の幻影と穏やかな時を過ごすが、祖父の「“今”を生きろ。未来は、それについてくる」という言葉に背中を押され、現実の世界へ帰還する決意をする。</p>
            <p>亀裂の世界でかなめと再会したすなみは、しのねの作戦を伝え、共に街を歩く。人々が過去の幻影に囚われる姿を見てすなみが迷いを見せる中、かなめは涙をこらえながら「過去が大切じゃないなんて言わない。でも、俺たちが生きる場所は“ここ”じゃないんだ！」と叫ぶ。その言葉は人々の心に届き、街全体が想念が生み出した「核」であったことが明かされる。</p>
            <p>人々は過去との別れを受け入れ、「今」へと帰還。亀裂は消滅し、街には活気が戻る。かなめは祖父の写真を一番目立つ場所に飾り、面倒でかけがえのない「今」を生きるために、新たな日常へと歩み出す。</p>
        `,
        episode1: `
            <p>ウェブサイトプロジェクトとして作成したキャラクター紹介サイトもあり、キャラクターのプロフィールやデザインが反映されている。</p>
        `
        
    };

    // --- データ挿入処理 ---
    // ページに存在しない要素へのアクセスを防ぐため、存在チェックを追加
    const philosophySection = document.getElementById('section-philosophy');
    if(philosophySection) philosophySection.innerHTML = guideData.philosophy;
    
    const worldSection = document.getElementById('section-world');
    if(worldSection) worldSection.innerHTML = guideData.world;

    const plotSection = document.getElementById('section-plot');
    if(plotSection) plotSection.innerHTML = guideData.plot;

    const episode1Section = document.getElementById('section-episode1');
    if(episode1Section) episode1Section.innerHTML = guideData.episode1;

    for (const charKey in guideData.characters) {
        const char = guideData.characters[charKey];
        const container = document.getElementById(`char-${charKey}`);
        if (container) {
            container.innerHTML = `
                <h3>${char.name}</h3>
                <table>
                    <tr><th>役割</th><td>${char.role}</td></tr>
                    <tr><th>性格</th><td>${char.personality}</td></tr>
                    <tr><th>秘密</th><td>${char.secret}</td></tr>
                    <tr><th>関係性</th><td>${char.relationships}</td></tr>
                </table>
            `;
        }
    }
    
    // --- ナビゲーションのアクティブ表示処理 ---
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.side-nav li a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});