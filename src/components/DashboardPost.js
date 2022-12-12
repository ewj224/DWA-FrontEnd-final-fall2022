import React from 'react';

function DashboardPost({ CanvasContent, CanvasDate }){
    return (
        <div className='DashboardPosts'>
            {/* date and color - clicking actual square itself will lead to the post */}
            <p className='Date'>{CanvasDate}</p>
            <p className='Content'>{CanvasContent}</p>
            <p>hahahah</p>
        </div>
    );
}

export default DashboardPost;