import React, { memo } from "react";

const ChatHeader = () => {
    return (
        <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
                <div className="img_cont">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" alt="" />

                </div>
                <div className="user_info">
                    <span>Lens!</span>

                </div>
            </div>

            <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i>
                <button type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-log-out"></span> Log out
                                  </button>
            </span>
            <div className="action_menu">
                <ul>
                    <li><i className="fas fa-user-circle"></i> View profile</li>
                    <li><i className="fas fa-users"></i> Add to close friends</li>
                    <li><i className="fas fa-plus"></i> Add to group</li>
                    <li><i className="fas fa-ban"></i> Block</li>
                </ul>
            </div>
        </div>
    );
}

export default memo(ChatHeader);