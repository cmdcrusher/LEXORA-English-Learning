import Block from "./theory/Block";
import CheckBlock from "./theory/CheckBlock";
import Divider from "./theory/Divivder";
import EndBlock from "./theory/EndBlock";
import ExampleBlock from "./theory/ExampleBlock";
import GoalBlock from "./theory/GoalBlock"
import InterestingBlock from "./theory/InterestingBlock";
import ListBlock from "./theory/ListBlock";
import MistakeBlock from "./theory/MistakesBlock";
import RememberBlock from "./theory/RememberBlock";
import RuleBlock from "./theory/RuleBlock";
import TableBlock from "./theory/TableBlock";
import TextBlock from "./theory/TextBlock";
import TipBlock from "./theory/TipBlock";

// TheoryRenderer.jsx
export default function TheoryRenderer({ theory }) {
    return (
        <div className="flex flex-col gap-4">
            {theory.map((block, index) => {
                switch (block.type) {
                    case "goal": return <GoalBlock key={index} block={block} />;
                    case "table": return <TableBlock key={index} block={block} />;
                    case "text": return <TextBlock key={index} block={block} />;
                    case "list": return <ListBlock key={index} block={block} />;
                    case "example": return <ExampleBlock key={index} block={block} />;
                    case "rule": return <RuleBlock key={index} block={block} />;
                    case "tip": return <TipBlock key={index} block={block} />;
                    case "mistake": return <MistakeBlock key={index} block={block} />;
                    case "divider": return <Divider key={index} block={block} />;
                    case "block": return <Block key={index} block={block} />;
                    case "check": return <CheckBlock key={index} block={block} />;
                    case "remember": return <RememberBlock key={index} block={block} />;
                    case "end": return <EndBlock key={index} block={block} />;
                    case "interesting": return <InterestingBlock key={index} block={block} />;
                    default: return null;
                }
            })}
        </div>
    );
}