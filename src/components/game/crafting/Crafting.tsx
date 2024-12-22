import React from 'react';

const Crafting: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Path of Exile 2 製作系統概覽</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">製作通貨</h2>
          <p className="mb-4">
            Path of Exile 2 採用通貨驅動的製作系統。不同的通貨球可以用獨特的方式修改物品，通常是透過增加或移除詞綴。
            但並非所有在原版 Path of Exile 中的通貨球都會存在於 PoE2 中。
          </p>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-red-500">重要變更</h3>
            <p>
              洗練石（Orbs of Scouring）將不會存在於 Path of Exile 2！這意味著你無法"洗白"一個不理想的詞綴，
              這也提升了白色（未製作）物品的價值，因為沒有辦法將稀有或魔法物品恢復到白色未製作狀態。
              根據 Maxroll 團隊實際體驗，白色物品在遊戲中變得極為珍貴。
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-green-500">新手指南</h3>
            <p>
              基本通貨介紹、製作技巧和注意事項等：
              <br />
              1. 基本通貨：了解各種基本通貨及其用途。
              <br />
              2. 製作技巧：掌握製作系統的基本操作和進階技巧。
              <br />
              3. 注意事項：避免常見錯誤，提升製作效率。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">插槽修改機制</h2>
          <p className="mb-4">
            插槽系統有了重大改變：
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>插槽現在出現在技能寶石上，而不是裝備上</li>
            <li>插槽會自動連結，這意味著你不需要使用連結石（Orbs of Fusing）</li>
            <li>早期遊戲裝備變得更簡單，你只需要關注抗性、生命和傷害</li>
          </ul>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">插槽通貨變更</h3>
            <p>
              幻色石（Chromatic Orbs）不再存在於 Path of Exile 2。取而代之的是，
              不同等級的工匠石（Jeweler's Orbs）將用於直接在現有技能寶石上添加插槽。
              每個插槽都會有專門的通貨球來添加。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">來自 Maxroll 的製作系統概覽</h2>
          <div className="space-y-4">
            <p>Path of Exile 2 的製作讓玩家能夠透過改進裝備來提升角色能力，以應對遊戲中的挑戰。PoE 2 的製作系統設計得平易近人，並在高階提供複雜性，而不會過於繁瑣。根據目前已知的信息，改進物品是 Path of Exile 2 製作系統的核心。玩家從一個理想的基礎開始，然後添加或更改詞綴以達到最終結果。</p>
            <p><strong>搶先體驗：</strong>Path of Exile 2 是一個搶先體驗遊戲，因此很多內容可能會發生變化。請關注此頁面以獲取最新資訊。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">製作通貨</h3>
            <p>Path of Exile 2 擁有通貨驅動的製作系統。不同的通貨會以獨特的方式修改物品，通常是透過添加或移除詞綴。但並非所有原版 Path of Exile 中的通貨都會存在於 PoE 2 中。最顯著的變化是 Path of Exile 2 中不存在洗練石！這意味著你無法「洗掉」不需要的詞綴，這增加了白色（未製作）物品的價值，因為沒有辦法將稀有或魔法物品恢復到白色未製作狀態。Maxroll 團隊的成員在體驗 Path of Exile 2 後注意到，白色物品非常稀有。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">插槽修改通貨</h3>
            <p>你的插槽現在位於寶石上，而不是裝備上。此外，插槽會自動被視為連結，這意味著你不需要使用連結石。這應該使早期遊戲的裝備更容易！你只需專注於抗性、生命和傷害，而無需擔心裝備上的插槽、連結和顏色。</p>
            <p>Path of Exile 2 中不再有幻色石。然而，不同等級的珠寶匠之球將用於直接在現有的寶石中添加插槽。將有單獨的通貨來添加每個插槽。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">基本通貨</h3>
            <p>以下是一些你可以在 Path of Exile 2 中使用的基本製作通貨：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>蛻變石 - 將普通物品（白）提升為魔法物品（藍），獲得一條詞綴。</li>
              <li>增幅石 - 將一詞的魔法物品，新增第二條詞綴。</li>
              <li>點金石 - 將普通物品（白）提升為稀有物品（黃），獲得四條詞綴。</li>
              <li>富豪石 - 將魔法物品（藍）提升為稀有物品（黃），獲得一條詞綴。</li>
              <li>混沌石 - 先移除一條詞綴，再新增一條詞綴。</li>
              <li>崇高石 - 新增一條詞綴。</li>
              <li>神聖石 - 重骰所有固定詞綴與隨機詞綴。</li>
              <li>無效石 - 刪除一條詞綴。</li>
              <li>機會石 - 有機率將普通物品（白）升級為傳奇物品（橘），失敗將摧毀物品。</li>
              <li>知識卷軸 - 鑑定物品。</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">品質通貨</h3>
            <p>除了特別說明外，品質通貨提升的品質依物品等級而有差異。物品等級1的裝備，一個通貨可提升5%品質。有品質的裝備拆解後可拿回對應數量（品質／物品等級）的通貨。</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>磨刀石 - 提升軍用武器品質。每1%提升1%更多基底物理傷害。</li>
              <li>護甲片 - 提升防具品質。每1%提升1%更多防禦（護甲、閃避、能量護盾）。</li>
              <li>奧術蝕刻師 - 提升奧術武器品質。權杖每1%提供1%更多精神。法杖、長杖也可使用。</li>
              <li>玻璃彈珠 - 提升藥劑或護符的品質。藥劑每1%品質提升1%更多生命或魔力恢復。護符每1%品質提升1%更多持續時間。</li>
              <li>寶石匠的稜鏡 - 提升技能寶石品質。1顆可提升5%品質。滑鼠指向技能，按下Alt可查看品質效果。搖桿玩家「選擇」{'>'}「管理插槽」{'>'}「資訊」（R3）可以查看。</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">工匠石系列</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>工匠石 - 給軍用武器或防具新增一個符文插槽。頭盔、手套、鞋子、單手軍用武器預設上限1個；雙手軍用武器、身體護甲預設上限2個。</li>
              <li>工匠石（Lesser） - 技能寶石2插槽提升為3插槽（4連）</li>
              <li>高階工匠石（Greater） - 技能寶石3插槽提升為4插槽（5連）</li>
              <li>完美工匠石（Perfect） - 技能寶石4插槽提升為5插槽（6連）</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">精髓系統</h3>
            <p>精髓分為兩種類型：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>基礎精髓 - 將普通物品（白）提升為魔法物品（藍），並保證會有一條指定標籤詞綴。</li>
              <li>高階精髓 - 將魔法物品（藍）提升為稀有物品（黃），並保證會有一條指定標籤詞綴。</li>
            </ul>
            <p className="mt-2">共有12種類別：生命、魔力、防禦、物理、火焰、冰冷、閃電、混沌、攻擊、法術、速度、能力值。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">符文系統</h3>
            <p>符文可插入裝備的「符文插槽」來獲得能力：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>雙手軍用武器與身體護甲可擁有2個插槽</li>
              <li>單手武器、頭盔、手套、鞋子、盾牌可擁有1個插槽</li>
              <li>透過瓦爾寶珠有機率額外獲得1個插槽</li>
              <li>符文一旦嵌入便無法移除</li>
              <li>插槽也可嵌入「混沌試煉」的限定掉落「靈魂核心」</li>
            </ul>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="border border-gray-600 px-4 py-2">符文</th>
                    <th className="border border-gray-600 px-4 py-2">軍用武器效果</th>
                    <th className="border border-gray-600 px-4 py-2">防具效果</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">沙漠符文</td>
                    <td className="border border-gray-600 px-4 py-2">附加7-11火焰傷害</td>
                    <td className="border border-gray-600 px-4 py-2">+12%火焰抗性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">冰川符文</td>
                    <td className="border border-gray-600 px-4 py-2">附加6-10冰冷傷害</td>
                    <td className="border border-gray-600 px-4 py-2">+12%冰冷抗性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">暴風符文</td>
                    <td className="border border-gray-600 px-4 py-2">附加1-20閃電傷害</td>
                    <td className="border border-gray-600 px-4 py-2">+12%閃電抗性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">鍛鐵符文</td>
                    <td className="border border-gray-600 px-4 py-2">增加20%物理傷害</td>
                    <td className="border border-gray-600 px-4 py-2">增加20%護甲、閃避、能量護盾</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">肉體符文</td>
                    <td className="border border-gray-600 px-4 py-2">3%物理攻擊傷害偷取生命</td>
                    <td className="border border-gray-600 px-4 py-2">+25最大生命</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">心靈符文</td>
                    <td className="border border-gray-600 px-4 py-2">2%物理攻擊傷害偷取魔力</td>
                    <td className="border border-gray-600 px-4 py-2">+20最大魔力</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">重生符文</td>
                    <td className="border border-gray-600 px-4 py-2">每個被擊殺的敵人，獲得20生命</td>
                    <td className="border border-gray-600 px-4 py-2">每秒回復0.3%生命</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">啟發符文</td>
                    <td className="border border-gray-600 px-4 py-2">每個被擊殺的敵人，獲得10魔力</td>
                    <td className="border border-gray-600 px-4 py-2">增加15%魔力回復率</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">岩石符文</td>
                    <td className="border border-gray-600 px-4 py-2">使暈眩累積增加25%</td>
                    <td className="border border-gray-600 px-4 py-2">暈眩門檻+40</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 px-4 py-2">遠見符文</td>
                    <td className="border border-gray-600 px-4 py-2">+100命中值</td>
                    <td className="border border-gray-600 px-4 py-2">增加10%來自藥劑恢復的生命和魔力</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-4 mb-2">未知通貨</h3>
            <p>Path of Exile 1 中還有許多其他通貨，如聖戰寶珠、已淨化的聖戰寶珠和裂界之石。到目前為止，尚未確認這些是否存在於 Path of Exile 2 中。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">瓦爾寶珠</h3>
            <p>瓦爾寶珠是強大的製作物品，可以隨機、神秘地腐化你的裝備，每種結果的機率目前未知。由於腐化會阻止物品被進一步修改，它應該是你製作過程的最後一步。到目前為止，使用瓦爾寶珠可能會產生以下腐化結果：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>增加一個附魔</li>
              <li>重新roll最多 3 個詞綴</li>
              <li>增加一個插槽，忽略插槽限制</li>
              <li>破壞物品</li>
              <li>取消附魔</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">分解</h3>
            <p>在地上找到的物品可以賣金幣。或者，魔法物品可以在商人處分解以獲得點金石的碎片。稀有物品可以在商人處分解以獲得帝王球的碎片。分解允許你在沒有找到所需通貨的情況下製作物品。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">分解台</h3>
            <p>具有品質的武器和護甲可以在分解台分解，以獲得護甲碎片或磨刀石。為物品增加品質會提高其基礎屬性。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">製作基礎</h3>
            <p>PoE 2 中的製作始於一個基礎。你可以roll的詞綴因物品等級和基礎的屬性要求而異。例如，敏捷裝備具有與迴避相關的詞綴，而智慧裝備提供能量護盾。混合基礎可以roll來自兩個詞綴池的詞綴，因此夾克可以roll來自敏捷和智慧池的詞綴。普通物品沒有詞綴，魔法物品最多有 1 個前綴和 1 個後綴，而稀有物品最多有 3 個前綴和 3 個後綴。在製作過程中，你使用通貨球來添加、移除或修改物品上的詞綴。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">完成物品</h3>
            <p>下一步是使用通貨來完成物品。我們還不知道具體細節，但很可能會涉及混沌石、崇高石和空白石。如果你有4個好詞綴，你可以使用崇高石添加第5個。另一方面，如果你的物品有不想要的詞綴，你可以使用空白石移除它，或使用混沌石替換成更好的。但是這些通貨都具有隨機性，有可能會移除你想保留的詞綴或添加使物品變得更糟的詞綴。其他製作系統（與聯盟機制相關）可能會提供更有針對性的方式來製作或完成物品。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">其他製作系統</h3>
            <p>Path of Exile 1 還有許多其他製作系統，如製作台、野獸製作、化石製作、異能隱含詞綴、豐收製作和羅格製作。這些製作系統很有可能也會出現在 PoE 2 中。然而，GGG 也在努力簡化製作，同時保持深度。以下是我們知道將會出現在 PoE 2 中的一些系統。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">精髓</h3>
            <p>精髓將以新的形式回歸 Path of Exile 2。精髓不再將普通或稀有物品重鑄為新的稀有物品。現在有兩種精髓可以修改普通和魔法物品。普通精髓將普通物品升級為具有單一特定類型詞綴（如生命或冰冷）的魔法物品。高等精髓以相同的方式添加詞綴，但添加到魔法物品上，使其變為稀有。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">插槽與符文</h3>
            <p>在 Path of Exile 1 中，你的插槽容納技能寶石和輔助寶石。在 Path of Exile 2 中，你可以將艾茲麥符文插入你的物品中。胸甲和雙手武器可以有 2 個插槽，所有其他物品可以有 1 個。在後期的終局遊戲中，你可以使用瓦爾寶珠來增加更多插槽，或添加強大的魂核以獲得更好的獎勵。符文一旦放入物品就無法移除，因此請謹慎選擇！此外，帶有插槽的物品可以在分解台分解，以生成工匠之珠，從而為其他物品添加插槽。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">魂核</h3>
            <p>魂核是符文的更強版本，具有其較弱版本所沒有的詞綴。這些強大的物品被插入武器和護甲。與符文類似，魂核一旦放入物品就無法移除，因此請明智地選擇！</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">預兆</h3>
            <p>預兆是在 Path of Exile 2 的儀式中找到的。預兆是一種元詞綴。它們旨在修改你的製作通貨影響物品的方式。下面，「敏捷空白石預兆」使你的下一個空白石只移除一個後綴詞綴。你可以找到更多具有元製作效果的預兆！</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">催化劑</h3>
            <p>催化劑作為裂痕的獎勵回歸 Path of Exile 2。這些通貨物品可以為珠寶增加品質，從而將生命值等詞綴提高 20%。在新改進的裂痕戒指上，這個數值可能會更高。</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">影片指南摘要</h3>
            <p>Path of Exile 2 的製作涉及使用通貨球將物品從垃圾變成寶藏。你使用不同的通貨將你的基礎從白色轉換為魔法或稀有，添加詞綴，或移除並重新添加它們，以嘗試達到理想的結果。這裡的目標是一個附加系統，幾乎沒有辦法從物品中移除詞綴，這鼓勵玩家撿起地面上的物品。還有其他與聯盟相關的製作機制，它們為你提供了一組不同的工具來修改你的物品或創建新的製作基礎。你可以roll的詞綴取決於物品的基礎，不同的詞綴池根據物品是否需要敏捷、力量或智慧而分配。</p>

            <p>撰文者：aer0</p>
            <p>審閱者：Crouching_Tuna, Havoc616, Palsteron</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Crafting;
