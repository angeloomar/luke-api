
function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function DetailComponent(prop){
    return (
        <div>
            <h1>{prop.mainAttr}</h1>
            {Object.entries(prop.attributes).map(([key,  value]) => {
                return <p key={key} >{capitalize(key.replace("_", " "))}: {value}</p>
            })}
        </div>
    )
}
/// {
//      name: "Chao",
///     age: 1,
///     height: 192,
/// }

// [("name", "Chao"), ("age", 1) ]