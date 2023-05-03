import React, {useState} from "react";


function Reviews ({id, title, description, reviews, onDeleteReview, onUpdateReview, review}) {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  


  function handleDeleteReviewClick() {
    fetch(`./reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
     }})
      .then((r) => r.json())
      .then(() => {
        onDeleteReview(reviews);
        // console.log(reviews)
    });
  }

  function handleUpdateReview() {

    const updatedReview = {
      title: updatedTitle,
      description: updatedDescription,
    };
    
   fetch(`./reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({updatedReview}),
    })
      .then((r) => r.json())
      .then((patchedReview) => {
        onUpdateReview(patchedReview);
        setIsEditing(false);
      })
  }

  function handleEditClick() {
    setIsEditing(true); 
  }

  function handleTitleChange(e) {
    setUpdatedTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setUpdatedDescription(e.target.value);
  }

  if (isEditing) {
    return (
      <div className="review-text">
        <input className="review-title" type="text" value={updatedTitle} onChange={handleTitleChange} />
        <textarea className="review-text-box" value={updatedDescription} onChange={handleDescriptionChange} />
       <br></br>
        <button className="button" onClick={handleUpdateReview}>
          Save
        </button>
      </div>
    );
  }

    return (
        <div className="review">
        <div >
          <p>
            <strong>{title}</strong>
          </p>
          <p>{description}</p>
          <button className="button" onClick={handleEditClick}>
            Edit
          </button>
          <button className="button" onClick={handleDeleteReviewClick} >
            Delete
          </button>
        </div>
      </div>
    )

}

export default Reviews;