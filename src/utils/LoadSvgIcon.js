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
            // case 'passwordHide':
            //     return (
            //         <svg width={size} height={size + 1} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M4.88998 11.61C3.52151 10.8033 2.31537 9.74862 1.33331 8.5C1.33331 8.5 4.31998 4.5 7.99998 4.5C9.09551 4.52706 10.166 4.8334 11.11 5.39"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M12.8167 6.58667C13.497 7.1596 14.1169 7.80073 14.6667 8.5C14.2373 9.04129 13.7676 9.5492 13.2613 10.0193C12.2 11.0333 10.2267 12.5 7.99999 12.5C7.59608 12.4991 7.19356 12.4528 6.79999 12.362"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M8.78058 10.3427C9.26419 10.1381 9.64752 9.75096 9.84725 9.26533C9.87191 9.206 9.89325 9.14667 9.91391 9.086"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M9.41326 7.08598C9.22918 6.89321 9.00842 6.73917 8.76397 6.63293C8.51951 6.52669 8.25628 6.47038 7.98975 6.46733C7.72322 6.46427 7.45877 6.51451 7.21194 6.61512C6.9651 6.71572 6.74087 6.86465 6.55242 7.05315C6.36396 7.24165 6.21509 7.46591 6.11454 7.71277C6.014 7.95963 5.96381 8.22409 5.96693 8.49062C5.97006 8.75715 6.02642 9.02036 6.13272 9.2648C6.23902 9.50923 6.39311 9.72995 6.58593 9.91398"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M6.58663 9.91333L2.66663 13.8333"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M11.2599 5.23999L6.58655 9.91332"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M13.3332 3.16666L11.2599 5.23999"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
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
            // case 'edit':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
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
            // case 'passwordShow':
            //     return (
            //         <svg width={size} height={size + 1} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M8.00016 4.5C11.6802 4.5 14.6668 8.5 14.6668 8.5C14.6668 8.5 11.6802 12.5 8.00016 12.5C4.32016 12.5 1.3335 8.5 1.3335 8.5C1.3335 8.5 4.32016 4.5 8.00016 4.5Z"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round" />
            //             <path
            //                 d="M8 10.5C8.39562 10.5009 8.78253 10.3839 9.11141 10.164C9.44029 9.9441 9.69627 9.63127 9.84668 9.26535C9.99803 8.89995 10.0377 8.49787 9.96053 8.10996C9.8834 7.72205 9.69295 7.36572 9.41333 7.08601C9.13513 6.80646 8.78006 6.61595 8.39331 6.53869C8.00394 6.46107 7.6003 6.50049 7.23332 6.65201C6.86916 6.80513 6.55808 7.06197 6.33879 7.39056C6.11949 7.71914 6.00168 8.10497 6 8.50001C6 9.03045 6.2107 9.53914 6.58577 9.91422C6.96085 10.2893 7.46957 10.5 8 10.5Z"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round" />
            //         </svg>
            //     )
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
            // case 'search':
            //     return (
            //         <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            //             <path
            //                 d='M10.0003 18C11.8511 17.9999 13.6447 17.3581 15.0754 16.1839C16.506 15.0097 17.4853 13.3757 17.8464 11.5605C18.2074 9.74517 17.9278 7.86087 17.0552 6.2286C16.1827 4.59633 14.7712 3.3171 13.0613 2.60887C11.3513 1.90064 9.4486 1.80723 7.67747 2.34455C5.90635 2.88187 4.37635 4.01668 3.34813 5.55563C2.3199 7.09457 1.85709 8.94243 2.03856 10.7844C2.22002 12.6263 3.03453 14.3483 4.3433 15.657C5.0862 16.3999 5.96813 16.9891 6.93876 17.3911C7.90939 17.7931 8.9497 18 10.0003 18Z'
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap='round'
            //                 strokeLinejoin='round'
            //             />
            //             <path
            //                 d='M22.0003 22L18.0003 18'
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap='round'
            //                 strokeLinejoin='round'
            //             />
            //         </svg>
            //     )

            // case 'doubleCheck':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M1 8.57331L4.07683 11.8C4.20376 11.9283 4.37325 12 4.54964 12C4.72602 12 4.89552 11.9283 5.02244 11.8L11.1818 4"
            //                 stroke="#6C6C6C"
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M10 10.6667L10.6657 11.4667C10.7841 11.595 10.9423 11.6667 11.1069 11.6667C11.2716 11.6667 11.8331 10.795 11.9515 10.6667L17 4"
            //                 stroke="#6C6C6C"
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
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
            // case 'upArrow':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M18 15L12 9L6 15"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
            // case 'backArrow':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M4 12H20"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M12 4L20 12L12 20"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
            // case 'verticalDot':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M12 7.00003C12.296 7.00106 12.5884 6.93616 12.8562 6.81003C13.124 6.6839 13.3603 6.49971 13.548 6.27084C13.7357 6.04198 13.87 5.77419 13.9413 5.48691C14.0125 5.19963 14.0189 4.90007 13.96 4.61002C13.8807 4.22225 13.6895 3.86625 13.41 3.58603C13.132 3.3061 12.7769 3.11532 12.39 3.03803C12.0024 2.95939 11.6001 2.99839 11.2349 3.15003C10.8696 3.30166 10.5579 3.55902 10.34 3.88904C10.1192 4.21757 10.0009 4.60421 10 5.00003C10.0029 5.52957 10.2145 6.03659 10.589 6.41104C10.9634 6.78549 11.4705 6.99714 12 7.00003Z"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M12 14C12.296 14.0011 12.5884 13.9362 12.8562 13.81C13.124 13.6839 13.3603 13.4997 13.548 13.2708C13.7357 13.042 13.87 12.7742 13.9413 12.4869C14.0125 12.1996 14.0189 11.9001 13.96 11.61C13.8807 11.2223 13.6895 10.8662 13.41 10.586C13.132 10.3061 12.7769 10.1153 12.39 10.038C12.0024 9.95939 11.6001 9.99839 11.2349 10.15C10.8696 10.3017 10.5579 10.559 10.34 10.889C10.1192 11.2176 10.0009 11.6042 10 12C10.0029 12.5296 10.2145 13.0366 10.589 13.411C10.9634 13.7855 11.4705 13.9971 12 14Z"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M12 21C12.296 21.0011 12.5884 20.9362 12.8562 20.81C13.124 20.6839 13.3603 20.4997 13.548 20.2708C13.7357 20.042 13.87 19.7742 13.9413 19.4869C14.0125 19.1996 14.0189 18.9001 13.96 18.61C13.8807 18.2223 13.6895 17.8662 13.41 17.586C13.132 17.3061 12.7769 17.1153 12.39 17.038C12.0024 16.9594 11.6001 16.9984 11.2349 17.15C10.8696 17.3017 10.5579 17.559 10.34 17.889C10.1192 18.2176 10.0009 18.6042 10 19C10.0029 19.5296 10.2145 20.0366 10.589 20.411C10.9634 20.7855 11.4705 20.9971 12 21V21Z"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
            // case 'microphone':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M19 9V11C19 12.8565 18.2625 14.637 16.9498 15.9497C15.637 17.2625 13.8565 18 12 18C10.1435 18 8.36299 17.2625 7.05023 15.9497C5.73748 14.637 5 12.8565 5 11V9"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M12 18V22"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M9 22H15"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M16 6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42142 3.92172 8 4.93913 8 6V11C8 12.0609 8.42142 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V6Z"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //         </svg>
            //     )
            // case 'paperPin':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <g clipPath="url(#clip0_232_2518)">
            //                 <path
            //                     d="M22.8145 8.56898C22.8075 8.57685 22.8002 8.58454 22.7928 8.59204L9.64076 21.744C8.51567 22.8691 7.18127 23.4572 5.76391 23.4573C5.65624 23.4573 5.54815 23.4539 5.43959 23.4471C4.08556 23.3621 2.77193 22.7475 1.74073 21.7163C0.709525 20.6851 0.0948996 19.3716 0.00996212 18.0175C-0.0865066 16.4796 0.502384 15.0269 1.71293 13.8163L14.8218 0.707571C15.0415 0.487915 15.3977 0.487962 15.6173 0.707571C15.837 0.927274 15.837 1.28343 15.6173 1.50309L2.50845 14.6118C0.350649 16.7697 1.01027 19.3948 2.53624 20.9209C4.06226 22.4468 6.68745 23.1064 8.84524 20.9486L21.9857 7.8081C23.429 6.18074 22.9407 4.31741 21.8138 3.19059C20.6869 2.06371 18.8236 1.57541 17.1963 3.01874L8.80048 11.4145C7.69156 12.5234 8.00937 13.834 8.81623 14.6408C9.62313 15.4477 10.9337 15.7655 12.0426 14.6565L19.3086 7.39054C19.5283 7.17084 19.8844 7.17084 20.1041 7.39054C20.3238 7.61024 20.3238 7.96635 20.1041 8.18605L12.8381 15.4521C11.262 17.0282 9.22165 16.6372 8.02076 15.4363C6.81987 14.2355 6.42888 12.1951 8.00496 10.619L16.4124 2.2117C16.4198 2.20424 16.4275 2.19698 16.4354 2.18995C17.4079 1.32126 18.5519 0.916587 19.7433 1.02009C20.7961 1.1114 21.814 1.5997 22.6093 2.39507C23.4047 3.1904 23.893 4.20824 23.9843 5.26105C24.0877 6.45257 23.6832 7.59646 22.8145 8.56898Z"
            //                     fill={color}
            //                 />
            //             </g>
            //             <defs>
            //                 <clipPath id="clip0_232_2518">
            //                     <rect width={size} height={size} fill="white" />
            //                 </clipPath>
            //             </defs>
            //         </svg>
            //     )
            // case 'send':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M13.9991 13.4375C13.9991 13.625 13.9991 14 13.334 14C12.4789 14 2.97784 9.125 2.31276 8.5625C1.7807 8.1125 2.02864 7.625 2.31367 7.4375C2.97855 6.87517 12.5698 2.00292 13.3349 2C14 2.00001 14 2.375 14 2.5625L13.3343 6.6875C13.2584 7.1375 13.0491 7.25 12.954 7.25L7.25332 7.8125C7.18998 7.8125 7.06329 7.85 7.06329 8C7.06329 8.15 7.18998 8.1875 7.25332 8.1875L12.954 8.75C13.0491 8.75 13.2584 8.8625 13.3343 9.3125C13.5568 10.6722 13.9991 13.25 13.9991 13.4375Z"
            //                 fill={color}
            //             />
            //         </svg>
            //     )

            // case 'camera':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M22 18.2222C22 18.6937 21.8084 19.1459 21.4675 19.4793C21.1265 19.8127 20.664 20 20.1818 20H3.81818C3.33597 20 2.87351 19.8127 2.53253 19.4793C2.19156 19.1459 2 18.6937 2 18.2222V8.44444C2 7.97295 2.19156 7.52076 2.53253 7.18737C2.87351 6.85397 3.33597 6.66667 3.81818 6.66667H7.45455L9.27273 4H14.7273L16.5455 6.66667H20.1818C20.664 6.66667 21.1265 6.85397 21.4675 7.18737C21.8084 7.52076 22 7.97295 22 8.44444V18.2222Z"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round" />
            //             <path
            //                 d="M11.9999 16.4445C14.0082 16.4445 15.6363 14.8526 15.6363 12.8889C15.6363 10.9253 14.0082 9.33337 11.9999 9.33337C9.99158 9.33337 8.36353 10.9253 8.36353 12.8889C8.36353 14.8526 9.99158 16.4445 11.9999 16.4445Z"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round" />
            //         </svg>
            //     )
            // case 'picture':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M20.2463 20H3.75365C2.79331 20 2 19.1694 2 18.1639V5.83606C2 4.8306 2.79331 4 3.75365 4H20.2463C21.2067 4 22 4.8306 22 5.83606V18.1639C22 19.1694 21.2067 20 20.2463 20ZM3.7119 5.18033C3.37787 5.18033 3.12734 5.44262 3.12734 5.79235V18.1202C3.12734 18.47 3.37787 18.7322 3.7119 18.7322H20.2046C20.5386 18.7322 20.7891 18.47 20.7891 18.1202V5.79235C20.7891 5.44262 20.5386 5.18033 20.2046 5.18033H3.7119Z"
            //                 fill={color}
            //             />
            //             <path
            //                 d="M14.9437 11.3006C13.6493 11.3006 12.6472 10.2077 12.6472 8.89619C12.6472 7.58472 13.6911 6.49182 14.9437 6.49182C16.1963 6.49182 17.2401 7.58472 17.2401 8.89619C17.2401 10.2077 16.1963 11.3006 14.9437 11.3006ZM14.9437 7.58472C14.2756 7.58472 13.7328 8.15302 13.7328 8.85247C13.7328 9.55193 14.2756 10.1202 14.9437 10.1202C15.6117 10.1202 16.1545 9.55193 16.1545 8.85247C16.1545 8.15302 15.6117 7.58472 14.9437 7.58472Z"
            //                 fill={color}
            //             />
            //             <path
            //                 d="M18.0751 19.7814L8.43004 10.2951L2.91855 15.6284L2.16699 14.7978L8.43004 8.72131L18.8267 18.9508L18.0751 19.7814Z"
            //                 fill={color}
            //             />
            //             <path
            //                 d="M21.0815 16.6339L17.8664 13.9235L15.1942 16.2404L14.4844 15.3224L17.8664 12.4371L21.7495 15.7595L21.0815 16.6339Z"
            //                 fill={color}
            //             />
            //         </svg>
            //     )
            // case 'file':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M20 6H12.58C12.3746 6.00887 12.1717 5.95289 12 5.84C11.8239 5.7262 11.6904 5.55748 11.62 5.36C11.485 4.96325 11.2292 4.61874 10.8884 4.37482C10.5477 4.1309 10.139 3.99982 9.71997 4H4C3.47046 4.00289 2.96344 4.21453 2.58899 4.58897C2.21454 4.96342 2.00289 5.47046 2 6V18C2.00289 18.5295 2.21454 19.0366 2.58899 19.411C2.96344 19.7855 3.47046 19.9971 4 20H20C20.5295 19.9971 21.0366 19.7855 21.411 19.411C21.7855 19.0366 21.9971 18.5295 22 18V8C21.9971 7.47046 21.7855 6.96342 21.411 6.58897C21.0366 6.21453 20.5295 6.00289 20 6V6Z"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeMiterlimit="10"
            //             />
            //             <path
            //                 d="M2 16.98V11C2.00289 10.4705 2.21454 9.96342 2.58899 9.58897C2.96344 9.21453 3.47046 9.00289 4 9H20C20.5295 9.00289 21.0366 9.21453 21.411 9.58897C21.7855 9.96342 21.9971 10.4705 22 11V17.28"
            //                 stroke={color}
            //                 strokeWidth={weight}
            //                 strokeMiterlimit="10"
            //             />
            //         </svg>
            //     )
            // case 'play':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M18.9863 9.98529L6.644 2.30787C5.33478 1.49097 4 2.38437 4 3.9909V20.0183C4 21.3793 4.81073 22 5.56425 22C5.91909 22 6.28064 21.8776 6.63974 21.6388L19.0375 13.3447C19.6607 12.9263 20.0107 12.3069 19.9998 11.645C19.9894 10.9825 19.6206 10.3771 18.9863 9.98529ZM18.2066 11.8632L5.80954 20.1553C5.72615 20.2112 5.66041 20.2391 5.61537 20.2531C5.6032 20.2039 5.59103 20.128 5.59103 20.0183V3.99157C5.59103 3.82659 5.61842 3.74344 5.61842 3.72282C5.66711 3.72614 5.75232 3.75342 5.85944 3.81994L18.2 11.4974C18.3521 11.5925 18.3972 11.675 18.4118 11.657C18.4039 11.6796 18.3521 11.7641 18.2066 11.8632Z"
            //                 fill={color}
            //             />
            //         </svg>
            //     )
            // case 'pause':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M9.12 22H5.70667C4.76544 22 4 21.31 4 20.4615V3.53846C4 2.69 4.76544 2 5.70667 2H9.12C10.0612 2 10.8267 2.69 10.8267 3.53846V20.4615C10.8267 21.31 10.0612 22 9.12 22ZM5.70667 3.53846V20.4615H9.12128L9.12 3.53846H5.70667ZM18.2933 22H14.88C13.9388 22 13.1733 21.31 13.1733 20.4615V3.53846C13.1733 2.69 13.9388 2 14.88 2H18.2933C19.2346 2 20 2.69 20 3.53846V20.4615C20 21.31 19.2346 22 18.2933 22ZM14.88 3.53846V20.4615H18.2946L18.2933 3.53846H14.88Z"
            //                 fill={color}
            //             />
            //         </svg>
            //     )
            // case 'pauseSquare':
            //     return (
            //         <svg fill={color} width={size} height={size}
            //             viewBox="0 0 100 100"
            //             xmlns="http://www.w3.org/2000/svg"
            //         >
            //             <g id="Layer_6_copy">
            //                 <path d="M68.251,72.84H30.749c-2.258,0-4.089-1.831-4.089-4.089V31.249c0-2.258,1.831-4.089,4.089-4.089h37.502   c2.258,0,4.089,1.831,4.089,4.089v37.502C72.34,71.009,70.509,72.84,68.251,72.84z" />
            //                 <path d="M68.993,27.235c0.821,0.748,1.346,1.815,1.346,3.014v37.502c0,2.258-1.831,4.089-4.089,4.089H28.749   c-0.254,0-0.501-0.03-0.742-0.075c0.726,0.661,1.683,1.075,2.742,1.075h37.502c2.258,0,4.089-1.831,4.089-4.089V31.249   C72.34,29.245,70.896,27.585,68.993,27.235z" />
            //                 <path d="M68.251,72.84H30.749c-2.258,0-4.089-1.831-4.089-4.089V31.249   c0-2.258,1.831-4.089,4.089-4.089h37.502c2.258,0,4.089,1.831,4.089,4.089v37.502C72.34,71.009,70.509,72.84,68.251,72.84z"
            //                 /></g>
            //         </svg>
            //     )
            // 
            // case 'exit':
            //     return (
            //         <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path
            //                 d="M6.6665 8H13.3332"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M10.6665 5.33331L13.3332 7.99998L10.6665 10.6666"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round"
            //             />
            //             <path
            //                 d="M10.6665 13.3333C10.6641 13.6862 10.5228 14.0239 10.2733 14.2734C10.0238 14.5229 9.68604 14.6642 9.33317 14.6666H3.99984C3.64697 14.6642 3.30925 14.5229 3.05973 14.2734C2.81021 14.0239 2.66895 13.6862 2.6665 13.3333V2.66665C2.66895 2.31378 2.81021 1.97606 3.05973 1.72654C3.30925 1.47702 3.64697 1.33576 3.99984 1.33331H9.33317C9.68604 1.33576 10.0238 1.47702 10.2733 1.72654C10.5228 1.97606 10.6641 2.31378 10.6665 2.66665"
            //                 stroke={color}
            //                 strokeLinecap="round"
            //                 strokeLinejoin="round" />
            //         </svg>
            //     )


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
