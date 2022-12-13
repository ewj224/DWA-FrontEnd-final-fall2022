import React from 'react';

function DashboardPost({Mood }){
    return (
        <div className='ProfileStyle' style={{backgroundColor:`${Mood}`}}>
        </div>
    );
}

export default DashboardPost;