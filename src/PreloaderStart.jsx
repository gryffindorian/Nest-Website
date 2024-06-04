import React from "react";

export default function PreloaderStart() {
  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img src="template/assets/imgs/theme/loading.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
