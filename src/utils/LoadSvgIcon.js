const LoadSvgIcon = ({ name, size = 24, color = '#6C6C6C', weight = 1, fill = "none" }) => {

    const returnIconWithName = (name, size, color, weight) => {
        switch (name) {
            case 'user':
                return (
                    <svg width={size} height={size} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.0917 18.3333C3.68077 18.3436 3.28234 18.1911 2.9833 17.9091C2.83482 17.7697 2.71564 17.6021 2.63265 17.4161C2.54966 17.2301 2.50458 17.0294 2.5 16.8258V16.8258C2.53578 15.558 3.07231 14.3561 3.99221 13.4831C4.91211 12.61 6.14047 12.137 7.40835 12.1674H12.5917C13.8597 12.1365 15.0882 12.6094 16.0082 13.4826C16.9282 14.3557 17.4647 15.5579 17.5 16.8258V16.8258C17.4956 17.0294 17.4505 17.2301 17.3676 17.4162C17.2846 17.6022 17.1653 17.7698 17.0167 17.9091C16.7176 18.1912 16.3194 18.3442 15.9083 18.3349L4.0917 18.3333Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 9.16685C9.02312 9.17424 8.07842 8.81777 7.34996 8.16685C7.00828 7.86409 6.73307 7.4938 6.54165 7.07935C6.35761 6.66284 6.25847 6.21381 6.25 5.75852V5.07518C6.25856 4.62017 6.35769 4.17144 6.54165 3.75518C6.73297 3.34043 7.00818 2.96986 7.34996 2.66685C8.08234 2.02245 9.02448 1.66699 10 1.66699C10.9755 1.66699 11.9177 2.02245 12.65 2.66685C12.9918 2.96986 13.267 3.34043 13.4584 3.75518C13.6423 4.17144 13.7414 4.62017 13.75 5.07518V5.75852C13.7415 6.21381 13.6424 6.66284 13.4584 7.07935C13.2669 7.4938 12.9917 7.86409 12.65 8.16685C11.9216 8.81777 10.9769 9.17424 10 9.16685Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'lock':
                return (
                    <svg width={size} height={size} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="4.73077" width="10" height="7.46154" rx="0.5" stroke={color} />
                        <path d="M2.19231 3.80769C2.19231 1.98091 3.67321 0.5 5.5 0.5C7.32679 0.5 8.80769 1.98091 8.80769 3.80769V4.57692H2.19231V3.80769Z" stroke="#D9D9D9" />
                        <circle cx="5.5" cy="8.73076" r="1.26923" fill={color} />
                    </svg>
                )
            case 'commentFill':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={fill}
                        width={size}
                        height={size}
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                )
            case 'comment':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={weight}
                        stroke={color}
                        width={size}
                        height={size}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    </svg>

                )
            case 'star':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={fill}
                        width={size}
                        height={size}
                    >
                        <path
                            stroke={color}
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>

                )
            case 'check':
                return (
                    <svg width={size} height={size} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.66675 8.4067L5.8901 11.6334C6.02307 11.7617 6.20063 11.8334 6.38542 11.8334C6.5702 11.8334 6.74777 11.7617 6.88074 11.6334L13.3334 3.83337"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'loading':
                return (
                    <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"  >
                        <circle style={{ opacity: '0.25' }} cx="12" cy="12" r="10" stroke={color} strokeWidth="4"></circle>
                        <path style={{ opacity: '0.75' }} fill={fill} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                )
            case 'dragDrop':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={size}
                        height={size}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={weight}
                        stroke={color}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                    </svg>
                )
            case 'trash':
                return (
                    <svg width={size} height={size} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.83337 5.5H20.1667"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.1867 5.69238L17.2792 18.4616C17.2501 18.9265 17.0437 19.3625 16.7026 19.6797C16.3615 19.997 15.9117 20.1712 15.4459 20.1666H6.55423C6.08955 20.1676 5.64141 19.9942 5.29841 19.6807C4.95749 19.3628 4.75091 18.9267 4.7209 18.4616L3.81335 5.69238"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 8.8916V17.1416"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.75 9.78027V16.1969"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.25 9.78027V16.1969"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.16671 1.83301H12.8334C13.3185 1.83661 13.7827 2.03091 14.1257 2.37395C14.4688 2.71699 14.6631 3.18122 14.6667 3.66634V5.49967H7.33337V3.66634C7.33697 3.18122 7.5313 2.71699 7.87434 2.37395C8.21738 2.03091 8.68159 1.83661 9.16671 1.83301V1.83301Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'chevronLeft':
                return (
                    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 18L9 12L15 6"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'chevronRight':
                return (
                    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 18L15 12L9 6"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'close-circle':
                return (
                    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.9999 22C14.3134 22 16.5554 21.1979 18.3438 19.7302C20.1323 18.2625 21.3565 16.2201 21.8078 13.951C22.2592 11.6819 21.9099 9.32651 20.8193 7.28613C19.7287 5.24574 17.9644 3.64664 15.827 2.76125C13.6895 1.87587 11.3112 1.759 9.09728 2.43057C6.88334 3.10213 4.97074 4.52057 3.68538 6.44421C2.40002 8.36784 1.82141 10.6776 2.04816 12.9801C2.2749 15.2825 3.29297 17.4351 4.92888 19.071C6.80422 20.9464 9.34773 22 11.9999 22V22Z"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 15L15 9"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 9L15 15"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'info':
                return (
                    <svg width={size} height={size} viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.9998 21C13.3134 21.0003 15.5555 20.1983 17.344 18.7307C19.1326 17.2632 20.3571 15.2209 20.8086 12.9518C21.2602 10.6827 20.911 8.32718 19.8205 6.28669C18.73 4.24619 16.9657 2.64696 14.8283 1.76145C12.6909 0.875941 10.3126 0.75896 8.09856 1.43045C5.88456 2.10195 3.97189 3.52036 2.68645 5.444C1.40102 7.36764 0.822405 9.67749 1.04913 11.98C1.27585 14.2824 2.29392 16.435 3.92986 18.071C5.80619 19.9443 8.34844 20.9975 10.9998 21V21Z"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 9.5V16.5"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 6V7"
                            stroke={color}
                            strokeWidth={weight}
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                        />
                    </svg>

                )
            case 'setting':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={fill}
                        width={size}
                        height={size}
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
                            clipRule="evenodd"
                        />
                    </svg>

                )
            case 'hamberger':
                return (
                    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.16663 6.25H20.8333"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.4166 12.5H20.8333"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.25 18.75H20.8333"
                            stroke={color}
                            strokeWidth={weight}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )
            case 'chart':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={fill}
                        width={size}
                        height={size}
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                            clipRule="evenodd"
                        />
                    </svg>
                )
            case 'finger':
                return (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.24976 2.82288C9.40933 2.29181 10.6759 2 12 2C17.5229 2 22 7.06544 22 13.314C22 14.0083 21.5026 14.5711 20.8889 14.5711C20.2752 14.5711 19.7778 14.0083 19.7778 13.314C19.7778 8.454 16.2956 4.51421 12 4.51421C10.9665 4.51421 9.98273 4.7416 9.08358 5.15339C8.51476 5.4139 7.86699 5.10338 7.63673 4.45982C7.40649 3.81627 7.68094 3.08338 8.24976 2.82288ZM6.06859 5.71929C6.52867 6.17873 6.57244 6.97314 6.16638 7.49366C4.95563 9.04567 4.22222 11.0814 4.22222 13.314C4.22222 14.0083 3.72476 14.5711 3.11111 14.5711C2.49747 14.5711 2 14.0083 2 13.314C2 10.4455 2.94498 7.82363 4.50029 5.82993C4.90637 5.3094 5.60851 5.25987 6.06859 5.71929Z"
                            fill={fill}
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.44444 13.314C6.44444 9.84258 8.93174 7.02844 12 7.02844C15.0682 7.02844 17.5556 9.84258 17.5556 13.314C17.5556 14.0083 17.0581 14.5711 16.4444 14.5711C15.8308 14.5711 15.3333 14.0083 15.3333 13.314C15.3333 11.2311 13.841 9.54266 12 9.54266C10.159 9.54266 8.66666 11.2311 8.66666 13.314C8.66666 15.4224 8.28372 17.4328 7.59117 19.2586C7.34917 19.8966 6.69584 20.1919 6.13193 19.9179C5.56802 19.6441 5.30706 18.905 5.54906 18.267C6.12496 16.7488 6.44444 15.0752 6.44444 13.314ZM16.3569 15.8437C16.9629 15.9525 17.3763 16.5965 17.2801 17.2823C17.1339 18.3257 16.9309 19.3478 16.6747 20.3447C16.5034 21.0114 15.8869 21.3947 15.2977 21.2009C14.7083 21.0071 14.3696 20.3095 14.5409 19.6429C14.7711 18.7466 14.9538 17.8271 15.0853 16.8883C15.1816 16.2027 15.7508 15.7349 16.3569 15.8437Z"
                            fill={fill}
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 12.0569C12.6137 12.0569 13.1111 12.6197 13.1111 13.314C13.1111 16.1252 12.6007 18.8049 11.6779 21.2383C11.436 21.8762 10.7827 22.1715 10.2187 21.8979C9.65481 21.6241 9.39378 20.8849 9.63574 20.2469C10.4419 18.121 10.8889 15.7781 10.8889 13.314C10.8889 12.6197 11.3863 12.0569 12 12.0569Z"
                            fill={fill}
                        />
                    </svg>
                )
            case "location-pin":
                return (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M35.822 7.70505C33.091 2.99201 28.2402 0.112622 22.8459 0.00258301C22.6156 -0.00216309 22.3838 -0.00216309 22.1535 0.00258301C16.7593 0.112622 11.9084 2.99201 9.1773 7.70505C6.38572 12.5225 6.30934 18.3092 8.97296 23.1846L20.1318 43.6093C20.1368 43.6183 20.1418 43.6274 20.147 43.6363C20.638 44.4897 21.5175 44.9991 22.4999 44.9991C23.4821 44.9991 24.3616 44.4896 24.8525 43.6363C24.8577 43.6274 24.8627 43.6183 24.8677 43.6093L36.0266 23.1846C38.69 18.3092 38.6136 12.5225 35.822 7.70505ZM22.4997 20.3897C19.0103 20.3897 16.1715 17.5509 16.1715 14.0616C16.1715 10.5722 19.0103 7.73344 22.4997 7.73344C25.989 7.73344 28.8278 10.5722 28.8278 14.0616C28.8278 17.5509 25.9891 20.3897 22.4997 20.3897Z"
                            fill={fill}
                        />
                    </svg>
                );
            case 'target':
                return (
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.87 122.88"
                        width={size}
                        height={size}
                        fill={fill}
                    >
                        <path
                            d="M52.01,110.22c-9.96-1.91-18.86-6.79-25.76-13.68c-6.9-6.9-11.77-15.8-13.69-25.77h6.21 c1.82,8.28,5.99,15.68,11.78,21.47c5.78,5.78,13.18,9.95,21.46,11.78V110.22L52.01,110.22z M96.31,64.48 c-1.68,0-3.04-1.36-3.04-3.04c0-1.68,1.36-3.04,3.04-3.04h23.52c1.68,0,3.04,1.36,3.04,3.04c0,1.68-1.36,3.04-3.04,3.04H96.31 L96.31,64.48L96.31,64.48z M64.48,26.57c0,1.68-1.36,3.04-3.04,3.04c-1.68,0-3.04-1.36-3.04-3.04V3.04C58.4,1.36,59.76,0,61.44,0 c1.68,0,3.04,1.36,3.04,3.04V26.57L64.48,26.57L64.48,26.57z M64.48,119.84c0,1.68-1.36,3.04-3.04,3.04 c-1.68,0-3.04-1.36-3.04-3.04V96.31c0-4,6.08-4,6.08,0V119.84L64.48,119.84L64.48,119.84z M3.04,64.48C1.36,64.48,0,63.12,0,61.44 c0-1.68,1.36-3.04,3.04-3.04h23.52c1.68,0,3.04,1.36,3.04,3.04c0,1.68-1.36,3.04-3.04,3.04H3.04L3.04,64.48L3.04,64.48z M12.56,51.92c1.91-9.96,6.79-18.86,13.68-25.76c6.9-6.9,15.8-11.78,25.77-13.69v6.22c-8.28,1.82-15.68,5.99-21.47,11.78 c-5.78,5.78-9.96,13.17-11.77,21.45H12.56L12.56,51.92z M70.86,12.46c9.97,1.91,18.87,6.79,25.77,13.69 c6.89,6.89,11.78,15.81,13.68,25.77h-6.21c-1.82-8.28-5.99-15.69-11.78-21.47c-5.78-5.79-13.18-9.96-21.46-11.78V12.46L70.86,12.46 z M110.32,70.77c-1.91,9.96-6.79,18.87-13.69,25.77c-6.9,6.9-15.8,11.78-25.77,13.69v-6.21c16.55-3.64,29.62-16.69,33.25-33.25 H110.32L110.32,70.77z"
                            stroke={color}
                            strokeWidth={weight}
                        />
                        <path
                            d="M61.43,46.94c8,0,14.5,6.49,14.5,14.5c0,8.01-6.49,14.5-14.5,14.5c-8.01,0-14.5-6.49-14.5-14.5 C46.94,53.43,53.43,46.94,61.43,46.94L61.43,46.94z"
                            stroke={color}
                            strokeWidth={weight}
                        />
                    </svg>
                )
            case 'resultSuccess':
                return (
                    <svg width={size} height={size} viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.313 8.06522C56.445 7.19577 55.0367 7.19427 54.1688 8.06153L27.4929 34.6671L17.8682 24.2138C17.0366 23.3111 15.6305 23.2525 14.7263 24.0841C13.8227 24.9157 13.7649 26.3225 14.5965 27.226L25.7888 39.3811C26.1987 39.8266 26.7723 40.0853 27.3772 40.0978C27.3934 40.0985 27.4091 40.0985 27.4246 40.0985C28.0124 40.0985 28.5779 39.8651 28.9945 39.45L57.3086 11.2101C58.1787 10.3429 58.1802 8.93466 57.313 8.06522Z"
                            fill={color}
                        />
                        <path d="M56.7763 27.2763C55.5482 27.2763 54.5528 28.2717 54.5528 29.5C54.5528 43.3146 43.3146 54.5528 29.5 54.5528C15.6862 54.5528 4.44724 43.3146 4.44724 29.5C4.44724 15.6862 15.6862 4.44724 29.5 4.44724C30.7282 4.44724 31.7237 3.45185 31.7237 2.22368C31.7237 0.995395 30.7282 0 29.5 0C13.2335 0 0 13.2335 0 29.5C0 45.7658 13.2335 59 29.5 59C45.7658 59 59 45.7658 59 29.5C59 28.2718 58.0046 27.2763 56.7763 27.2763Z"
                            fill={color}
                        />
                        <clipPath id="clip0_1_13289">
                            <rect width={size} height={size} fill="white" />
                        </clipPath>
                    </svg>
                )
            case 'resultDanger':
                return (
                    <svg width={size} height={size} viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M56.7763 27.2763C55.5482 27.2763 54.5528 28.2717 54.5528 29.5C54.5528 43.3146 43.3146 54.5528 29.5 54.5528C15.6862 54.5528 4.44724 43.3146 4.44724 29.5C4.44724 15.6862 15.6862 4.44724 29.5 4.44724C30.7282 4.44724 31.7237 3.45185 31.7237 2.22368C31.7237 0.995395 30.7282 0 29.5 0C13.2335 0 0 13.2335 0 29.5C0 45.7658 13.2335 59 29.5 59C45.7658 59 59 45.7658 59 29.5C59 28.2718 58.0046 27.2763 56.7763 27.2763Z"
                            fill={color}
                        />
                        <path
                            d="M17.5 17.5L42.5 42.5"
                            stroke={color}
                            strokeWidth="4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.5 42.5L42.5 17.5"
                            stroke={color}
                            strokeWidth="4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20.5 39.5L45.5 14.5"
                            stroke={color}
                            strokeWidth="4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <clipPath id="clip0_1_13342">
                            <rect width={size} height={size} fill="white" />
                        </clipPath>
                    </svg>
                )
            case 'close':
                return (
                    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18" strokeWidth={weight} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 18L18 6" strokeWidth={weight} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )
            case 'empty':
                return (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 60 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.3971 11.6115H25.6029C26.9265 11.6115 28 10.5797 28 9.30576C28 8.03183 26.9265 7 25.6029 7H14.3971C13.0742 7 12 8.03183 12 9.30576C12 10.5797 13.0742 11.6115 14.3971 11.6115Z"
                            fill={color}
                        />
                        <path
                            d="M14.3082 26.3693H45.6918C46.9664 26.3693 48 25.336 48 24.0636C48 22.7896 46.9664 21.7578 45.6918 21.7578H14.3082C13.0344 21.7578 12 22.7896 12 24.0636C12 25.336 13.0344 26.3693 14.3082 26.3693Z"
                            fill={color}
                        />
                        <path
                            d="M14.3082 40.2033H45.6918C46.9664 40.2033 48 39.1708 48 37.8976C48 36.6236 46.9664 35.5918 45.6918 35.5918H14.3082C13.0344 35.5918 12 36.6236 12 37.8976C12 39.1708 13.0344 40.2033 14.3082 40.2033Z"
                            fill={color}
                        />
                        <path
                            d="M57.7926 2.65776C56.9007 1.78075 55.4547 1.78075 54.563 2.65776L0.668909 55.6536C-0.22297 56.5306 -0.22297 57.9524 0.668909 58.8293C1.11479 59.2679 1.69929 59.487 2.28368 59.487C2.86806 59.487 3.45256 59.2678 3.89856 58.8293L57.7926 5.83347C58.6845 4.95657 58.6845 3.53477 57.7926 2.65776Z"
                            fill={color}
                        />
                        <clipPath id="clip0_1_7747">
                            <rect width={size} height={size} fill="white" />
                        </clipPath>
                    </svg>
                )

            default:
                break;
        }
    }

    return (
        <>
            {returnIconWithName(name, size, color, weight)}
        </>
    )
}

export default LoadSvgIcon
