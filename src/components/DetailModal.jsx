

import React from 'react'

const DetailModal = ({post}) => {
  return (
    
//     <!-- Button trigger modal -->
// <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postDetails">
//   Launch demo modal
// </button>

// <!-- Modal -->
<div className="modal fade" id="postDetails" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{post.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {post.body}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



  )
}

export default DetailModal;