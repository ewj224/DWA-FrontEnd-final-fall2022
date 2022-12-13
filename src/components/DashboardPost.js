import React from 'react';

function DashboardPost({ Content, Date, Title, Mood }){
    return (
        <div className='DashboardPosts' style={{backgroundColor:`${Mood}`}}>
            {/* date and color - clicking actual square itself will lead to the post */}
            <p className='Title'>Title: {Title}</p>
            <p className='Date'>Date: {Date}</p>
            <p className='Content'>Content: {Content} </p>
        </div>
    );
}

export default DashboardPost;