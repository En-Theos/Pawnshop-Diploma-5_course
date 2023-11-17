import Title from "../../components/title";
import EvaluationWristwatch from "../../components/evaluation/evaluationWristwatch";
import BlockText from "../../components/blockText";
import CallBlock from "../../components/callBlock";

import "../goldPage/style.scss";

export default function WristwatchPage() {
    return (
        <main className="evaluationPage">
            <Title minorTitle={{ text: "Оцiнка наручних годинникiв" }} mainTitle={{ text: "Ви можете отримати кредит за 3 хвилини! Для цього потрібен лише предмет застави, ІПН, паспорт або інший документ, який ідентифікує особу.", size: "20px" }} />
            <EvaluationWristwatch/>
            <BlockText text={["Час – це не просто послідовність хвилин і годин, це невловимий ритм нашого життя, вишукана симфонія мить і спогадів. І щоб цей ритм завжди був з вами у найкращому вигляді, вам потрібні не просто годинники, а витвір мистецтва, що обнімає час.",
                "У нашому ломбарді ми вітаємо годинники, які розповідають свою унікальну історію. Вони – не лише вимірювачі часу, а й втілення стилю, класу та індивідуальності. Кожен механізм, кожен циферблат – це маленький шедевр, що зберігає частинку минулого та розкриває двері в майбутнє.",
                "Ваші годинники – це не просто предмет розкоші. Вони – свідок ваших перемог, переживань та важливих моментів. Купуючи або обмінюючи свій час на такий непередаваний аксесуар, ви додаєте своєму образу неповторний шарм елегантності та історії.",
                "Ласкаво просимо в наш ломбард, де ми цінуємо не лише час, але й той неповторний шарм, який приносить кожен наручний годинник. Довірте нам свої історії, і ми зробимо все можливе, щоб ваші годинники знайшли нового власника, який так само поважатиме і цінуватиме кожну мить."]} />
            <CallBlock />
        </main>
    )
}