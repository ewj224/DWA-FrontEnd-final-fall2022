import React from 'react';

function DashboardPost({ CanvasContent, CanvasDate, CanvasTitle }){
    return (
        <div className='DashboardPosts'>
            {/* date and color - clicking actual square itself will lead to the post */}
            <p className='Title'>Title: {CanvasTitle}</p>
            <p className='Date'>Date: {CanvasDate}</p>
            <p className='Content'>Content: {CanvasContent} </p>
        </div>
    );
}

export default DashboardPost;