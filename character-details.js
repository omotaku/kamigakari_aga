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

    const characterDetailsData = {
        kaname: {
            name: "かなめ (要)",
            image: "https://via.placeholder.com/150/cccccc/000000?text=Kaname",
            catchphrase: "やれやれ、俺の平穏な日常は昨日死んだ。",
            details: [
                { title: "基本プロフィール", content: "本作の主人公、語り部、ツッコミ役、そして巻き込まれ体質の常識人。特徴のない、ごく普通の青年。普段はやる気がなく、少し眠たそうな「死んだ魚のような目」をしているが、ツッコミを入れる瞬間だけは鋭く光る。口では「面倒だ」「帰りたい」と常に文句を言っているが、本心では仲間を見捨てられないお人好し。この「本音と建前」のギャップが彼の最大の魅力。" },
                { title: "特殊能力：【なし】", content: "特殊能力はない" },
                { title: "心情変化チャート", 
                  content: "<ul>" +
                           "<li><strong>初期『逃避と諦観』</strong>:「なんで俺が…」と平穏を求め、非日常的な仲間たちから距離を置こうとする。「関わるとロクなことがない」と皮肉たっぷりに実況。</li>" +
                           "<li><strong>中期『絆されと責任感』</strong>:「仕方ないな」「俺がやらないと…」と、後始末や軌道修正が自分の「役目」だと不本意ながら自覚。「手のかかる奴らだ」「放っておけない」と庇護欲が芽生え始める。</li>" +
                           "<li><strong>後期『自覚と居場所』</strong>:「こいつらといるのも、まあ悪くない」「この場所は、俺が守る」。非日常がかけがえのない「日常」になったことを自覚し、仲間一人ひとりの個性を尊重し、全員が笑っていられる「居場所」を大切にしたいと心の底から願うようになる。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>すなみ:</strong> 最も手のかかる相手だが、彼女の裏表のない笑顔に弱い。<br><strong>いづね:</strong> 守るべき妹のような存在。彼女の安らかな寝顔が癒やし。<br><strong>しのね:</strong> 唯一、腹の探り合いができる対等な相手。彼女の意外な一面にドキッとさせられる。<br><strong>かおり:</strong> 唯一、愚痴や弱音をこぼせる「常識人同盟」の仲間。<br><strong>橘さん:</strong> 尊敬する大人であり、同時に最も警戒すべきラスボス。" },
                { title: "話し方ガイドライン",
                  content: `
                      <ul>
                          <li><strong>一人称:</strong> 俺</li>
                          <li><strong>口調:</strong> 常識人で冷静。感情が高ぶると短文＆語気強め。</li>
                          <li><strong>特徴:</strong> ツッコミ・ドライな言い回し・淡泊な語尾。</li>
                          <li><strong>語尾例:</strong> ～だろ、～じゃねぇか、～かよ、～だな</li>
                          <li><strong>セリフ例:</strong>
                              <ul>
                                  <li>「無理だろ。それ」</li>
                                  <li>「しらねぇよ！」</li>
                                  <li>「橘さん……なんてことを」</li>
                                  <li>「おい、順番ってもんがあるだろ」</li>
                              </ul>
                          </li>
                      </ul>
                  `
                }
            ]
        },
        sunami: {
            name: "すなみ",
            image: "https://via.placeholder.com/150/e74c3c/ffffff?text=Sunami",
            catchphrase: "難しいことはよくわかんないけど、楽しければオッケー！",
            details: [
                { title: "基本プロフィール", content: "ヒロイン①、トラブルメーカー、行動力の化身。太陽のような笑顔が眩しい、元気いっぱいの巫女。動きやすいように改造した装束を着ている。彼女の行動に悪意は一切ない。ただ「楽しそう！」という純粋な好奇心と善意が、結果的に大騒動を引き起こす直感型人間。" },
                { title: "特殊能力：【お札】", content: "頭のお札は、橘さんが作った対悪霊用の決戦兵器だが、悪霊がいないため宝の持ち腐れ。本人はただの名札だと思っている。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【便利な相棒】</strong>: かなめを「フットワークが軽くて、文句を言うけど結局手伝ってくれる便利な人」と認識。彼の能力を純粋に評価している。</li>" +
                           "<li><strong>後期【信頼できる戦友】</strong>: どんなトラブルにも最後まで付き合ってくれる彼を、誰よりも信頼できる「背中を預けられる相手」だと感じるようになる。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 最高の相棒。彼なら何とかしてくれると全幅の信頼を置いている。彼への気持ちは、まだ友情と恋の区別がついていない。" },
                { title: "話し方ガイドライン",
                  content: `
                      <ul>
                          <li><strong>一人称:</strong> 私／あたし</li>
                          <li><strong>口調:</strong> 明るく元気。子供っぽく、テンション高め。</li>
                          <li><strong>特徴:</strong> オノマトペ・感情語多め。突拍子のない発言多し。</li>
                          <li><strong>語尾例:</strong> ～だよ、～しよっ、～じゃん、～なのー？</li>
                          <li><strong>セリフ例:</strong>
                              <ul>
                                  <li>「でっかいやつ作ろっ！」</li>
                                  <li>「えー！やだー！」</li>
                                  <li>「早くやろうよー！」</li>
                                  <li>「漫画ではすぐ植えてたのに～」</li>
                              </ul>
                          </li>
                      </ul>
                  `
                }
            ]
        },
        izune: {
            name: "いづね",
            image: "https://via.placeholder.com/150/ecf0f1/2c3e50?text=Izune",
            catchphrase: "すぴー…ん、zzz",
            details: [
                { title: "基本プロフィール", content: "ヒロイン②、不思議系。常に眠そうで、ゆったりとした時間の流れの中にいる。無口だが、かなめのツッコミには的確な一言を放つことも。その存在自体が癒やしであり、マイペースを崩さない姿勢が周囲に安らぎを与える。時折見せる鋭い洞察力や、核心を突く発言で周囲を驚かせる。" },
                { title: "特殊能力：【？？？】", content: "不明。しかし、あらゆる事象を察知し、寝たまま予知夢を見たり、危険を回避する能力がある（本人は無自覚）。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【快適な場所】</strong>: 騒がしい日常の中に、かなめの隣という「静かで落ち着ける場所」を見つける。彼の存在を大きな木陰のように感じている。</li>" +
                           "<li><strong>中期【唯一の理解者】</strong>: 無口で表情に乏しい自分を、言葉ではなく「気配」で理解してくれるかなめに、特別な信頼感を抱くようになる。彼が困っていると、微睡みながらも手を差し伸べようとする。</li>" +
                           "<li><strong>後期【隣で眠りたい人】</strong>: 彼が一番心地よく、安心できる場所だと無意識に認識している。彼の傍で眠るのが「普通」になる。彼の隣で見る夢は、いつも暖かくて優しい。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 一緒にいると安心する、お気に入りの「ひだまり」のような存在。<br><strong>すなみ:</strong> 騒がしいけれど、一緒にいると楽しい仲間。たまに振り回される。<br><strong>しのね:</strong> 賢くてすごい人、と思っている。たまに厳しいと感じることも。<br><strong>かおり:</strong> 優しいお姉さん。ごはんをくれる人。<br><strong>橘さん:</strong> 昔から知っている、優しいおじいちゃん。" },
                { title: "話し方ガイドライン",
                  content: `
                      <ul>
                          <li><strong>一人称:</strong> 私／いづね</li>
                          <li><strong>口調:</strong> ゆったり・眠そう。語尾が伸びる。</li>
                          <li><strong>特徴:</strong> 発言少なめ。空気のように自然体。癒しポジション。</li>
                          <li><strong>語尾例:</strong> ～だねぇ、～かなぁ、～だよぉ、～……zzz</li>
                          <li><strong>セリフ例:</strong>
                              <ul>
                                  <li>「ここ、気持ちいい……」</li>
                                  <li>「あたたかい……zzz」</li>
                                  <li>「ふわぁ……」</li>
                                  <li>「うん……」</li>
                              </ul>
                          </li>
                      </ul>
                  `
                }
            ]
        },
        shinone: {
            name: "しのね",
            image: "https://via.placeholder.com/150/2ecc71/ffffff?text=Shinone",
            catchphrase: "あなたたち、本当に手がかかるわね。",
            details: [
                { title: "基本プロフィール", content: "ヒロイン③、知性派の参謀役。クールで論理的。常に全体を俯瞰し、最適な解決策を提示する。普段は冷静沈着だが、仲間が危機に瀕すると内に秘めた熱い感情が顔を出す。かなめとは互いに軽口を叩き合う関係だが、内心では互いの能力を認め合っている。" },
                { title: "特殊能力：【分析と予測】", content: "膨大な知識と冷静な分析力で、あらゆる状況を正確に予測し、最適な指示を出す。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【非効率な集団】</strong>: 個性的な仲間たちを「効率の悪い、手のかかる連中」と認識。かなめを唯一の「まともな協力者」と見なし、彼に期待を寄せている。</li>" +
                           "<li><strong>後期【頼れる司令塔】</strong>: 自分が指示を出すことで物事がスムーズに進むことに喜びを感じ始める。かなめ以外の仲間にも、それぞれの役割を理解し、信頼するようになる。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 唯一、対等に議論できる相手。彼のツッコミには一目置いている。<br><strong>すなみ:</strong> 予測不能な行動に振り回されるが、その純粋さに救われることも。<br><strong>いづね:</strong> 癒やし担当。彼女のマイペースさに呆れつつも、守ってあげたい存在。<br><strong>かおり:</strong> 頼れるお姉さん。冷静な意見交換ができる貴重な存在。<br><strong>橘さん:</strong> 謎多き存在。その知識と経験には敬意を払っている。" },
                { title: "話し方ガイドライン",
                  content: `
                      <ul>
                          <li><strong>一人称:</strong> 私</li>
                          <li><strong>口調:</strong> 知的で理論的。ややお姉さん的。</li>
                          <li><strong>特徴:</strong> 指示を出すことに長ける。少し上から目線のときも。</li>
                          <li><strong>語尾例:</strong> ～わね、～でしょう、～かしら、～なのよ</li>
                          <li><strong>セリフ例:</strong>
                              <ul>
                                  <li>「何を植えるのかしら？」</li>
                                  <li>「土壌は十分柔らかくなったわね」</li>
                                  <li>「あなた達、何やってんのよ」</li>
                                  <li>「次は肥料を加えるわよ」</li>
                              </ul>
                          </li>
                      </ul>
                  `
                }
            ]
        },
        kaori: {
            name: "かおり",
            image: "https://via.placeholder.com/150/9b59b6/ffffff?text=Kaori",
            catchphrase: "はいはい、わかってるから落ち着いて？",
            details: [
                { title: "基本プロフィール", content: "常識人②、かなめの幼馴染。現実的で面倒見が良いお姉さんタイプ。かなめのツッコミ役でもあり、彼のボケを拾ってくれる貴重な存在。場の空気を読むのが得意で、破天荒な仲間たちの間を取り持つ潤滑油のような役割を果たす。しっかり者だが、時折見せる天然な一面も魅力。" },
                { title: "特殊能力：【常識力（ツッコミ）】", content: "この物語で最も常識的な思考を持つ。そのツッコミは、暴走しがちな物語の舵取りに不可欠。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【世話焼き】</strong>: 生活に馴れないかなめに、世話を焼く。彼の変化を一番近くで見守っている。</li>" +
                           "<li><strong>後期【頼れる仲間】</strong>: 不思議な現象や能力に直面し、かなめと共に奔走する中で、彼らとの絆を深める。かなめになにかを頼ることも。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 幼馴染であり、数少ない常識人仲間。一番気楽に話せる相手。<br><strong>すなみ:</strong> 天真爛漫な妹のような存在。その行動力には驚かされる。<br><strong>いづね:</strong> 癒やし系の後輩。ぼーっとしている姿を見ていると和む。<br><strong>しのね:</strong> 頼れる友人。彼女の的確な指示にはいつも助けられている。<br><strong>橘さん:</strong> 昔から知っている、優しいおじいちゃん。時々何を考えているかわからない時もある。" },
                { title: "話し方ガイドライン",
                  content: `
                      <ul>
                          <li><strong>一人称:</strong> 私</li>
                          <li><strong>口調:</strong> 明るく親しみやすい。自然体で実務的。</li>
                          <li><strong>特徴:</strong> 現実的な提案をする。ややお姉さん風。</li>
                          <li><strong>語尾例:</strong> ～よ、～だよ、～でしょ、～じゃない？</li>
                          <li><strong>セリフ例:</strong>
                              <ul>
                                  <li>「初めてだからミニトマトにしといたよ」</li>
                                  <li>「まあね」</li>
                                  <li>「あ、やっときた」</li>
                                  <li>「服汚れるよ～、起きてってば」</li>
                              </ul>
                          </li>
                      </ul>
                  `
                }
            ]
        },
        tachibana: {
            name: "橘さん",
            image: "https://via.placeholder.com/150/f1c40f/2c3e50?text=Tachibana",
            catchphrase: "ほっほっほ、面白いことになったのう。",
            details: [
                { title: "基本プロフィール", content: "神社の宮司であり、この物語のキーパーソン。飄々としていて掴みどころがなく、いつも微笑んでいる。全てを知っているようだが、多くは語らない。かなめの祖父とは旧知の仲で、かなめをこの非日常に引き込んだ張本人でもある。その行動の真意は謎に包まれている。" },
                { title: "特殊能力：【言霊と神力】", content: "言葉に霊力を宿らせ、神社の土地神と繋がることで、様々な奇跡を引き起こす。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【導き手】</strong>: かなめを半ば強引に非日常へと誘い込む。彼の成長を静かに見守り、時にヒントを与える。</li>" +
                           "<li><strong>中期【試練と観察者】</strong>: かなめと仲間たちが問題を解決していく過程を観察し、必要な試練を与える。彼らの絆が深まることに満足感を覚える。</li>" +
                           "<li><strong>後期【継承と見届け人】</strong>: かなめが「居場所」を見つけ、使命を自覚していく姿に、かつての友（かなめの祖父）の面影を重ねる。未来を彼らに託し、静かに見守る立場となる。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 才能を秘めた孫弟子。彼を導き、成長を促す。<br><strong>すなみ:</strong> 素直で純粋な巫女。彼女の存在が悪霊を遠ざけている。<br><strong>いづね:</strong> 眠れる力を持つ巫女。彼女の安寧を願っている。<br><strong>しのね:</strong> 鋭い洞察力を持つ現代の知恵者。彼女の力を評価している。<br><strong>かおり:</strong> 誠実な若者。かなめの良い理解者だと見ている。" },
                { title: "話し方ガイドライン",
                  content: `
                      <ul>
                          <li><strong>一人称:</strong> わし／儂</li>
                          <li><strong>口調:</strong> 古風で丁寧。落ち着いていて包容力あり。</li>
                          <li><strong>特徴:</strong> 文語調。「〜じゃ」「〜ぬか」「〜であろう」など。</li>
                          <li><strong>語尾例:</strong> ～じゃ、～であろう、～ぬか、～のう</li>
                          <li><strong>セリフ例:</strong>
                              <ul>
                                  <li>「少しばかり土地も余っておる」</li>
                                  <li>「作れるであろう」</li>
                                  <li>「神社の裏手なら……」</li>
                              </ul>
                          </li>
                      </ul>
                  `
                }
            ]
        }
    };

    const tabsContainer = document.getElementById('character-tabs');
    const contentContainer = document.getElementById('character-details-content');
    let firstCharKey = null;

    if (tabsContainer && contentContainer) {
        // characterDetailsDataからタブとコンテンツを動的に生成
        for (const charKey in characterDetailsData) {
            if (!firstCharKey) {
                firstCharKey = charKey;
            }
            const char = characterDetailsData[charKey];

            // タブボタンを生成
            const button = document.createElement('button');
            button.classList.add('tab-button');
            button.dataset.target = charKey;
            button.textContent = char.name.split(' ')[0]; // 名前の最初の部分だけ表示
            tabsContainer.appendChild(button);

            // コンテンツセクションを生成
            const contentDiv = document.createElement('div');
            contentDiv.id = charKey;
            contentDiv.classList.add('tab-content');

            let detailsHtml = `
                <div class="character-header">
                    <img src="${char.image}" alt="${char.name}" class="character-image">
                    <div class="character-info">
                        <h2>${char.name}</h2>
                        <p class="catchphrase">${char.catchphrase}</p>
                    </div>
                </div>
            `;

            char.details.forEach(section => {
                detailsHtml += `
                    <div class="detail-section">
                        <h4>${section.title}</h4>
                        <div>${section.content}</div>
                    </div>
                `;
            });
            contentDiv.innerHTML = detailsHtml;
            contentContainer.appendChild(contentDiv);
        }

        // タブ切り替え機能
        tabsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-button')) {
                const targetId = e.target.dataset.target;

                // 全てのタブとコンテンツを非アクティブに
                tabsContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                contentContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                // クリックされたものだけアクティブに
                e.target.classList.add('active');
                document.getElementById(targetId).classList.add('active');
                
                // URLのハッシュを更新
                history.pushState(null, null, `#${targetId}`);
            }
        });

        // URLハッシュに基づいて初期タブを表示
        function showTabFromHash() {
            const hash = window.location.hash.substring(1);
            const targetTab = document.querySelector(`.tab-button[data-target=\"${hash}\"]`);
            
            if (targetTab) {
                targetTab.click();
            } else if (firstCharKey) {
                // デフォルトで最初のタブを表示
                document.querySelector(`.tab-button[data-target=\"${firstCharKey}\"]`).click();
            }
        }

        showTabFromHash();
    }
});