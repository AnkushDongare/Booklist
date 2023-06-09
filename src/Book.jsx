const Book = (props)=>{
    const {image, title, author, number} = props
    return <article className="book">
        <img src={image} alt={title} title={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p className="number">{`# ${number + 1}`}</p>
    </article>
}

export default Book