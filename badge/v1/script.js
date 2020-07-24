(function() {
  // GET MAIN DIV
  var div = document.getElementById('aletheia-badge');
  div.setAttribute("style", "text-align: center;max-width: 125px;margin: auto;");
  // ADD LOGO TO MAIN DIV
  var logo = `
    <svg width="100%" height="100%" viewBox="0 0 258 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M213.035 42.0558C211.584 40.6081 209.735 39.6222 207.722 39.2227C205.709 38.8232 203.623 39.0282 201.727 39.8116C199.831 40.595 198.21 41.9217 197.07 43.624C195.93 45.3263 195.321 47.3276 195.321 49.3749C195.321 51.4222 195.93 53.4235 197.07 55.1258C198.21 56.828 199.831 58.1548 201.727 58.9382C203.623 59.7216 205.709 59.9266 207.722 59.5271C209.735 59.1276 211.584 58.1417 213.035 56.694C214.981 54.7528 216.074 52.12 216.074 49.3749C216.074 46.6297 214.981 43.997 213.035 42.0558V42.0558Z" fill="url(#paint0_linear)"/>
      <path d="M247.782 5.12811C247.782 6.14236 247.481 7.13382 246.916 7.97713C246.351 8.82044 245.548 9.47772 244.609 9.86586C243.67 10.254 242.636 10.3555 241.639 10.1577C240.642 9.95981 239.726 9.4714 239.007 8.75423C238.288 8.03705 237.798 7.12331 237.6 6.12856C237.401 5.1338 237.503 4.10271 237.892 3.16568C238.281 2.22864 238.94 1.42774 239.786 0.864258C240.631 0.300776 241.625 1.80421e-05 242.642 1.80421e-05C243.317 -0.00177196 243.987 0.129648 244.611 0.386725C245.236 0.643802 245.803 1.02147 246.281 1.49801C246.758 1.97456 247.137 2.54058 247.395 3.16356C247.652 3.78654 247.784 4.45418 247.782 5.12811V5.12811Z" fill="url(#paint1_linear)"/>
      <path d="M162.281 73.9368C162.281 74.9511 161.98 75.9426 161.415 76.7859C160.85 77.6292 160.047 78.2865 159.108 78.6746C158.169 79.0627 157.135 79.1643 156.138 78.9664C155.141 78.7685 154.225 78.2801 153.506 77.563C152.787 76.8458 152.297 75.932 152.099 74.9373C151.9 73.9425 152.002 72.9114 152.391 71.9744C152.78 71.0374 153.439 70.2365 154.285 69.673C155.13 69.1095 156.124 68.8087 157.141 68.8087C157.816 68.807 158.486 68.9384 159.11 69.1955C159.735 69.4525 160.302 69.8302 160.78 70.3067C161.257 70.7833 161.636 71.3493 161.894 71.9723C162.151 72.5953 162.283 73.2629 162.281 73.9368V73.9368Z" fill="url(#paint2_linear)"/>
      <path d="M220.42 33.9838C217.88 31.5581 214.775 29.7998 211.386 28.8668C207.996 27.9339 204.427 27.8555 201 28.6387C200.476 27.7601 199.675 27.0793 198.722 26.7027C197.77 26.326 196.719 26.2747 195.734 26.5568C194.749 26.8388 193.886 27.4383 193.278 28.2617C192.671 29.085 192.354 30.0858 192.377 31.1077C192.387 31.6058 192.489 32.0978 192.677 32.5593C191.857 33.195 191.08 33.8839 190.351 34.6214C187.447 37.6527 185.509 41.4747 184.782 45.6045C184.055 49.7342 184.572 53.9862 186.267 57.8229C187.962 61.6597 190.76 64.9091 194.306 67.1603C197.852 69.4114 201.987 70.5634 206.189 70.4705C210.391 70.3776 214.472 69.044 217.914 66.6383C221.357 64.2327 224.007 60.8629 225.53 56.9549C227.053 53.047 227.38 48.7764 226.471 44.6828C225.561 40.5893 223.456 36.8566 220.42 33.9567V33.9838ZM220.025 62.9616C216.331 66.4382 211.44 68.366 206.361 68.3465C201.282 68.327 196.406 66.3617 192.738 62.8569C189.071 59.352 186.894 54.5756 186.658 49.515C186.421 44.4544 188.142 39.4964 191.466 35.6661C192.072 35.0425 192.717 34.458 193.397 33.916C193.991 34.7101 194.826 35.2923 195.777 35.5765C196.729 35.8607 197.747 35.8317 198.68 35.4939C199.614 35.156 200.414 34.5272 200.961 33.7006C201.509 32.874 201.775 31.8935 201.72 30.9043C201.719 30.6026 201.683 30.3021 201.612 30.0089C205.746 29.1413 210.051 29.6159 213.896 31.3633C217.741 33.1108 220.925 36.0394 222.983 39.7211C225.04 43.4028 225.863 47.6444 225.331 51.8259C224.799 56.0074 222.94 59.9095 220.025 62.9616Z" fill="url(#paint3_linear)"/>
      <path d="M257.329 74.5338C257.329 75.2722 257.11 75.9941 256.698 76.6079C256.286 77.2217 255.702 77.6998 255.017 77.9818C254.333 78.2638 253.581 78.3369 252.855 78.1918C252.129 78.0468 251.463 77.6901 250.94 77.167C250.418 76.6439 250.062 75.9778 249.92 75.2532C249.777 74.5287 249.853 73.7781 250.138 73.0966C250.423 72.4152 250.905 71.8335 251.521 71.4251C252.138 71.0168 252.863 70.8003 253.603 70.803C254.093 70.803 254.579 70.8996 255.032 71.0872C255.485 71.2749 255.896 71.5499 256.243 71.8965C256.589 72.2431 256.863 72.6545 257.05 73.1071C257.236 73.5596 257.331 74.0445 257.329 74.5338V74.5338Z" fill="url(#paint4_linear)"/>
      <path d="M255.289 34.5943C255.291 33.4369 255.064 32.2905 254.621 31.2208C254.179 30.151 253.529 29.1788 252.709 28.3597C251.889 27.5407 250.916 26.891 249.844 26.4476C248.772 26.0043 247.623 25.7761 246.463 25.7761C245.659 25.7797 244.859 25.8892 244.083 26.1017C240.608 20.4051 235.881 15.5702 230.26 11.9617C224.638 8.35331 218.268 6.06564 211.631 5.27132C204.994 4.477 198.262 5.19677 191.944 7.37634C185.627 9.55591 179.888 13.1383 175.16 17.8534C171.179 21.821 167.998 26.5139 165.79 31.6775C165.342 31.5908 164.887 31.5453 164.43 31.5419C162.684 31.5319 160.993 32.1524 159.669 33.2888C158.346 34.4252 157.479 36.0009 157.228 37.725C156.978 39.449 157.362 41.2052 158.308 42.6694C159.254 44.1337 160.699 45.2071 162.377 45.6916C161.914 51.8623 162.76 58.061 164.86 63.8834C166.961 69.7059 170.268 75.0212 174.566 79.4826C178.865 83.944 184.058 87.4514 189.807 89.7759C195.556 92.1004 201.731 93.1897 207.93 92.9729C214.13 92.7562 220.214 91.2381 225.785 88.5177C231.357 85.7974 236.291 81.9359 240.265 77.1852C244.24 72.4344 247.166 66.9011 248.853 60.9463C250.539 54.9914 250.948 48.7488 250.053 42.6256C251.611 41.9355 252.935 40.8094 253.864 39.3839C254.794 37.9585 255.289 36.2947 255.289 34.5943ZM235.434 78.0067C229.501 83.9284 221.892 87.8953 213.631 89.3739C205.37 90.8526 196.854 89.772 189.227 86.2775C181.6 82.783 175.229 77.0422 170.971 69.8275C166.713 62.6129 164.772 54.2703 165.409 45.9222C166.849 45.7288 168.197 45.1066 169.277 44.137C170.357 43.1673 171.118 41.8954 171.462 40.4872C171.805 39.0791 171.715 37.6003 171.203 36.244C170.691 34.8877 169.781 33.717 168.592 32.8849C171.546 25.9789 176.346 20.0157 182.468 15.6465C188.589 11.2774 195.797 8.67044 203.303 8.1104C210.809 7.55036 218.325 9.05879 225.03 12.4709C231.735 15.883 237.371 21.0676 241.322 27.4584C239.807 28.5453 238.675 30.0837 238.091 31.8524C237.507 33.6212 237.5 35.5292 238.071 37.3021C238.642 39.0751 239.762 40.6217 241.27 41.7196C242.778 42.8175 244.596 43.4102 246.463 43.4124H247.075C247.949 49.682 247.353 56.0685 245.333 62.0691C243.313 68.0697 239.924 73.5208 235.434 77.9932V78.0067Z" fill="url(#paint5_linear)"/>
      <path d="M228.552 26.5088C224.384 22.346 219.154 19.4002 213.427 17.9904C207.701 16.5806 201.697 16.7605 196.066 18.5106C190.435 20.2607 185.391 23.5144 181.48 27.9192C177.57 32.324 174.942 37.7121 173.882 43.4999C172.821 49.2878 173.368 55.2548 175.464 60.7547C177.559 66.2546 181.123 71.0778 185.77 74.7019C190.416 78.3261 195.968 80.6131 201.824 81.3152C207.68 82.0173 213.617 81.1078 218.992 78.6851C219.955 79.7071 221.254 80.3496 222.653 80.4955C224.051 80.6414 225.456 80.281 226.61 79.4799C227.764 78.6789 228.591 77.4906 228.94 76.1318C229.289 74.7731 229.137 73.3344 228.512 72.0783C234.572 66.0393 237.981 57.847 237.988 49.302C237.996 40.7569 234.602 32.5585 228.552 26.5088V26.5088ZM184.422 70.5453C180.22 66.355 177.355 61.0178 176.189 55.2062C175.022 49.3946 175.606 43.3687 177.867 37.8877C180.128 32.4067 183.965 27.7159 188.894 24.4064C193.823 21.097 199.624 19.3169 205.565 19.2905C211.506 19.2641 217.323 20.9925 222.281 24.2581C227.239 27.5236 231.118 32.1801 233.428 37.6408C235.737 43.1015 236.375 49.122 235.261 54.9438C234.146 60.7655 231.33 66.1279 227.165 70.3554C226.312 69.6284 225.268 69.1608 224.157 69.0081C223.046 68.8554 221.914 69.024 220.896 69.494C219.878 69.9639 219.016 70.7154 218.414 71.6593C217.811 72.6031 217.492 73.6997 217.496 74.8187C217.502 75.4896 217.621 76.1547 217.849 76.7858C212.297 79.2311 206.133 79.9437 200.167 78.8299C194.201 77.7161 188.712 74.8281 184.422 70.5453V70.5453Z" fill="url(#paint6_linear)"/>
      <path d="M11.7031 40.9824V50H6.42969V24.4062H16.4141C18.3359 24.4062 20.0234 24.7578 21.4766 25.4609C22.9414 26.1641 24.0664 27.166 24.8516 28.4668C25.6367 29.7559 26.0293 31.2266 26.0293 32.8789C26.0293 35.3867 25.168 37.3672 23.4453 38.8203C21.7344 40.2617 19.3613 40.9824 16.3262 40.9824H11.7031ZM11.7031 36.7109H16.4141C17.8086 36.7109 18.8691 36.3828 19.5957 35.7266C20.334 35.0703 20.7031 34.1328 20.7031 32.9141C20.7031 31.6602 20.334 30.6465 19.5957 29.873C18.8574 29.0996 17.8379 28.7012 16.5371 28.6777H11.7031V36.7109ZM28.2969 40.3145C28.2969 38.4277 28.6602 36.7461 29.3867 35.2695C30.1133 33.793 31.1562 32.6504 32.5156 31.8418C33.8867 31.0332 35.4746 30.6289 37.2793 30.6289C39.8457 30.6289 41.9375 31.4141 43.5547 32.9844C45.1836 34.5547 46.0918 36.6875 46.2793 39.3828L46.3145 40.6836C46.3145 43.6016 45.5 45.9453 43.8711 47.7148C42.2422 49.4727 40.0566 50.3516 37.3145 50.3516C34.5723 50.3516 32.3809 49.4727 30.7402 47.7148C29.1113 45.957 28.2969 43.5664 28.2969 40.543V40.3145ZM33.377 40.6836C33.377 42.4883 33.7168 43.8711 34.3965 44.832C35.0762 45.7812 36.0488 46.2559 37.3145 46.2559C38.5449 46.2559 39.5059 45.7871 40.1973 44.8496C40.8887 43.9004 41.2344 42.3887 41.2344 40.3145C41.2344 38.5449 40.8887 37.1738 40.1973 36.2012C39.5059 35.2285 38.5332 34.7422 37.2793 34.7422C36.0371 34.7422 35.0762 35.2285 34.3965 36.2012C33.7168 37.1621 33.377 38.6562 33.377 40.6836ZM65.9844 43.0918L68.4805 30.9805H73.3848L68.5332 50H64.2793L60.6758 38.0293L57.0723 50H52.8359L47.9844 30.9805H52.8887L55.3672 43.0742L58.8477 30.9805H62.5215L65.9844 43.0918ZM84.6699 50.3516C81.8809 50.3516 79.6074 49.4961 77.8496 47.7852C76.1035 46.0742 75.2305 43.7949 75.2305 40.9473V40.4551C75.2305 38.5449 75.5996 36.8398 76.3379 35.3398C77.0762 33.8281 78.1191 32.668 79.4668 31.8594C80.8262 31.0391 82.373 30.6289 84.1074 30.6289C86.709 30.6289 88.7539 31.4492 90.2422 33.0898C91.7422 34.7305 92.4922 37.0566 92.4922 40.0684V42.1426H80.3809C80.5449 43.3848 81.0371 44.3809 81.8574 45.1309C82.6895 45.8809 83.7383 46.2559 85.0039 46.2559C86.9609 46.2559 88.4902 45.5469 89.5918 44.1289L92.0879 46.9238C91.3262 48.002 90.2949 48.8457 88.9941 49.4551C87.6934 50.0527 86.252 50.3516 84.6699 50.3516ZM84.0898 34.7422C83.082 34.7422 82.2617 35.082 81.6289 35.7617C81.0078 36.4414 80.6094 37.4141 80.4336 38.6797H87.5V38.2754C87.4766 37.1504 87.1719 36.2832 86.5859 35.6738C86 35.0527 85.168 34.7422 84.0898 34.7422ZM106.08 35.7441C105.389 35.6504 104.779 35.6035 104.252 35.6035C102.33 35.6035 101.07 36.2539 100.473 37.5547V50H95.3926V30.9805H100.191L100.332 33.248C101.352 31.502 102.764 30.6289 104.568 30.6289C105.131 30.6289 105.658 30.7051 106.15 30.8574L106.08 35.7441ZM116.943 50.3516C114.154 50.3516 111.881 49.4961 110.123 47.7852C108.377 46.0742 107.504 43.7949 107.504 40.9473V40.4551C107.504 38.5449 107.873 36.8398 108.611 35.3398C109.35 33.8281 110.393 32.668 111.74 31.8594C113.1 31.0391 114.646 30.6289 116.381 30.6289C118.982 30.6289 121.027 31.4492 122.516 33.0898C124.016 34.7305 124.766 37.0566 124.766 40.0684V42.1426H112.654C112.818 43.3848 113.311 44.3809 114.131 45.1309C114.963 45.8809 116.012 46.2559 117.277 46.2559C119.234 46.2559 120.764 45.5469 121.865 44.1289L124.361 46.9238C123.6 48.002 122.568 48.8457 121.268 49.4551C119.967 50.0527 118.525 50.3516 116.943 50.3516ZM116.363 34.7422C115.355 34.7422 114.535 35.082 113.902 35.7617C113.281 36.4414 112.883 37.4141 112.707 38.6797H119.773V38.2754C119.75 37.1504 119.445 36.2832 118.859 35.6738C118.273 35.0527 117.441 34.7422 116.363 34.7422ZM126.875 40.3496C126.875 37.3848 127.537 35.0234 128.861 33.2656C130.197 31.5078 132.02 30.6289 134.328 30.6289C136.18 30.6289 137.709 31.3203 138.916 32.7031V23H144.014V50H139.426L139.18 47.9785C137.914 49.5605 136.285 50.3516 134.293 50.3516C132.055 50.3516 130.256 49.4727 128.896 47.7148C127.549 45.9453 126.875 43.4902 126.875 40.3496ZM131.955 40.7188C131.955 42.5 132.266 43.8652 132.887 44.8145C133.508 45.7637 134.41 46.2383 135.594 46.2383C137.164 46.2383 138.271 45.5762 138.916 44.252V36.7461C138.283 35.4219 137.188 34.7598 135.629 34.7598C133.18 34.7598 131.955 36.7461 131.955 40.7188ZM126.945 72.666C126.945 75.7129 126.295 78.0918 124.994 79.8027C123.693 81.502 121.877 82.3516 119.545 82.3516C117.482 82.3516 115.836 81.5605 114.605 79.9785L114.377 82H109.807V55H114.887V64.6855C116.059 63.3145 117.6 62.6289 119.51 62.6289C121.83 62.6289 123.646 63.4844 124.959 65.1953C126.283 66.8945 126.945 69.291 126.945 72.3848V72.666ZM121.865 72.2969C121.865 70.375 121.561 68.9746 120.951 68.0957C120.342 67.2051 119.434 66.7598 118.227 66.7598C116.609 66.7598 115.496 67.4219 114.887 68.7461V76.252C115.508 77.5879 116.633 78.2559 118.262 78.2559C119.902 78.2559 120.98 77.4473 121.496 75.8301C121.742 75.0566 121.865 73.8789 121.865 72.2969ZM136.982 74.8105L140.498 62.9805H145.947L138.301 84.9531L137.879 85.9551C136.742 88.4395 134.867 89.6816 132.254 89.6816C131.516 89.6816 130.766 89.5703 130.004 89.3477V85.498L130.777 85.5156C131.738 85.5156 132.453 85.3691 132.922 85.0762C133.402 84.7832 133.777 84.2969 134.047 83.6172L134.645 82.0527L127.982 62.9805H133.449L136.982 74.8105Z" fill="url(#paint7_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="213.031" y1="56.6358" x2="198.401" y2="41.9708" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C244A9"/>
        <stop offset="0.677083" stop-color="#497EC8"/>
        <stop offset="1" stop-color="#497EC8"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="247.782" y1="5.12811" x2="237.515" y2="5.12811" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E592FB"/>
        <stop offset="0.51" stop-color="#7B6DFA"/>
        <stop offset="1" stop-color="#5E31F9"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="481.106" y1="627.772" x2="403.482" y2="627.772" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E592FB"/>
        <stop offset="0.338542" stop-color="#D0BCEF"/>
        <stop offset="0.651042" stop-color="#7B6DFA"/>
        <stop offset="1" stop-color="#9B5AD5"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="184.054" y1="27.689" x2="222.501" y2="66.2439" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3762FA"/>
        <stop offset="0.114583" stop-color="#60A8FB"/>
        <stop offset="0.505418" stop-color="#8B7CD7"/>
        <stop offset="1" stop-color="#C244A9"/>
        </linearGradient>
        <linearGradient id="paint4_linear" x1="803.806" y1="480.739" x2="1048.99" y2="480.739" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9B5AD5"/>
        <stop offset="0.51" stop-color="#7B6DFA"/>
        <stop offset="1" stop-color="#5E31F9"/>
        </linearGradient>
        <linearGradient id="paint5_linear" x1="9883.36" y1="130.858" x2="4858.49" y2="5731.8" gradientUnits="userSpaceOnUse">
        <stop stop-color="#497EC8"/>
        <stop offset="0.71875" stop-color="#7B6DFA"/>
        <stop offset="1" stop-color="#C244A9"/>
        </linearGradient>
        <linearGradient id="paint6_linear" x1="5167.56" y1="835.488" x2="3554.51" y2="3818.04" gradientUnits="userSpaceOnUse">
        <stop stop-color="#497EC8"/>
        <stop offset="0.15625" stop-color="#60A8FB"/>
        <stop offset="1" stop-color="#C244A9"/>
        </linearGradient>
        <linearGradient id="paint7_linear" x1="73" y1="22" x2="73" y2="71" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C244A9"/>
        <stop offset="1" stop-color="#9B5AD5"/>
        </linearGradient>
      </defs>
    </svg>
  `;
  var img = new Image();
  div.innerHTML = logo; 
  // CLICK EVENT ON DIV
  document.getElementById('aletheia-badge').onclick = function() {
    window.open('https://aletheiadata.org');
  };
  
})();