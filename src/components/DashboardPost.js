import React from 'react';

function DashboardPost({ CanvasContent, CanvasDate, CanvasTitle }){
    return (
        <div className='DashboardPosts'>
            {/* date and color - clicking actual square itself will lead to the post */}
            <p className='Date'>{CanvasDate}</p>
            <p className='Title'>{CanvasTitle}</p>
            <p className='Content'>{CanvasContent}</p>
        </div>
    );
}

export default DashboardPost;