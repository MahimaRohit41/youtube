import React from 'react';

const commentsData = [
    {
        name: "Mahima",
        comment: "Nice",
        replies: []
    },
    {
        name: "Mahima",
        comment: "Very useful content",
        replies: [{
            name: "Mahima",
            comment: "Very useful content",
            replies: [
                {
                    name: "Mahima",
                    comment: "Very useful content",
                    replies: []
                },
                {
                    name: "Mahima",
                    comment: "Very useful content",
                    replies: []
                },
                {
                    name: "Mahima",
                    comment: "Very useful content",
                    replies: []
                }
            ]
        }]
    },
    {
        name: "Mahima",
        comment: "Very useful content",
        replies: [{
            name: "Mahima",
            comment: "Very useful content",
            replies: [
                {
                    name: "Mahima",
                    comment: "Very useful content",
                    replies: [
                        {
                            name: "Mahima",
                            comment: "Very useful content",
                            replies: []
                        }
                    ]
                }
            ]
        }]
    },

];

const Comment = ({data}) => {
    const {name,comment,replies} = data;
    return (
        <div className='flex bg-gray-100 shadow-sm p-2 my-2 rounded-sm'>
            <img
                className="h-12"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="user-logo"
                />
            <div className='mx-5'>
                <p className='font-extrabold'>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    )
};

const CommentList = ({comments}) => {
    return comments.map((comment,index) => (
        <div key={index}>
            <Comment data={comment}/>
            <div className='ml-5 border border-l-black'>
                <CommentList comments={comment.replies}/>
            </div>
        </div>
        )
    )

};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold'>
           Comments
        </h1>
        {/* <Comment data={commentsData[0]}/> */}
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;