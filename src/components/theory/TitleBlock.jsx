export default function TitleBlock({block}) {
    return(
        <div className="">
            <p className="">Lesson {block.id} — {block.title}</p>
        </div>
    )
}