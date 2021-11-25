import React from 'react';

const Icons = ({icon}) => {
    return (
        <>
        {
            (() => {
                switch(icon){
                    case 'Teplota':
                        return(
                            <svg viewBox="0 0 512 512" width="50" height="50" style={{fill: "#e67300"}} xmlns='http://www.w3.org/2000/svg'>
                                <g><path d="M341.333,288.593V85.333C341.333,38.205,303.128,0,256,0s-85.333,38.205-85.333,85.333v203.259C144.48,312.03,128,346.091,128,384c0,70.693,57.308,128,128,128s128-57.307,128-128C384,346.091,367.52,312.03,341.333,288.593zM256,469.333c-47.128,0-85.333-38.205-85.333-85.333c0-24.637,10.441-47.492,28.455-63.615l14.212-12.72V85.333c0-23.564,19.103-42.667,42.667-42.667s42.667,19.102,42.667,42.667v222.332l14.212,12.72c18.014,16.123,28.455,38.977,28.455,63.615C341.333,431.128,303.128,469.333,256,469.333z"/></g><g><rect x="234.667" y="170.667" width="42.667" height="256"/></g><g><circle cx="256" cy="384" r="64"/></g>
                            </svg>
                        );
                    case 'Vlhkost vzduchu':
                        return(
                            <svg viewBox="0 0 383.344 383.345" width="50" height="50" style={{fill: "#41bf95"}} >
                                <g><path d="M273.217,106.899c-27.181-44.864-57.413-83.693-73.016-102.846c-2.088-2.565-5.221-4.054-8.528-4.053c-3.308,0-6.44,1.489-8.529,4.054c-15.602,19.159-45.834,58.001-73.015,102.869c-35.028,57.823-52.789,105.63-52.789,142.09c0,74.071,60.261,134.332,134.332,134.332s134.332-60.261,134.332-134.332C326.005,212.529,308.246,164.715,273.217,106.899zM210.106,333.868c-7.844,2.006-15.986,3.022-24.205,3.022c-50.186,0-91.015-37.929-91.015-84.55c0-11.255,2.97-24.405,8.825-39.083c0.989-2.48,3.807-3.895,6.585-3.295c2.776,0.598,4.64,3.018,4.354,5.65c-0.342,3.148-0.516,6.223-0.516,9.136c0,50.735,40.881,93.221,95.093,98.821c2.698,0.279,4.803,2.297,5.018,4.812C214.461,330.896,212.723,333.198,210.106,333.868z"/></g>
                            </svg>
                        );
                    case 'Atmosférický tlak':
                        return(
                            <svg viewBox="0 0 512 512" width="50" height="50" style={{fill: "#21a8fc"}}>
                                <g><g><path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z M241,80h30v60h-30V80z M140,271H80v-30h60V271zM148.041,210.99l-51.962-30l15-25.98l51.962,30L148.041,210.99z M185.01,163.041l-30-51.961l25.98-15l30,51.961L185.01,163.041zM256,396c-22.091,0-40-17.909-40-40c0-16.785,10.343-31.146,25-37.081V191h30v127.919c14.657,5.935,25,20.296,25,37.081C296,378.091,278.091,396,256,396z M301.01,148.041l30-51.961l25.98,15l-30,51.961L301.01,148.041z M348.959,185.01l51.962-30l15,25.98l-51.962,30L348.959,185.01z M432,271h-60v-30h60V271z"/></g></g>
                            </svg>
                        );
                    case 'Nadmořská výšky':
                        return(
                            <svg height="50" viewBox="0 -78 512.0003 512" width="50" style={{fill: "#B80F0A"}}>
                                <path d="m509.632812 337.992188-82.898437-126.210938-31.230469 47.546875c-2.863281 4.359375-7.726562 6.984375-12.941406 6.984375s-10.078125-2.625-12.941406-6.980469l-31.230469-47.550781-17.34375 26.40625 54.386719 82.804688c7.207031 10.972656 9.226562 23.699218 5.953125 35.464843h118.285156c4.964844 0 8.988281-2.175781 11.035156-5.964843 2.042969-3.792969 1.652344-8.347657-1.074219-12.5zm0 0"/><path d="m408.210938 183.578125-14.929688-22.726563v-.003906c-2.570312-3.914062-6.476562-6.160156-10.722656-6.15625-4.238282 0-8.148438 2.246094-10.71875 6.160156l-14.925782 22.726563 25.648438 39.046875zm0 0"/><path d="m252.054688 189.5625-30.585938 57.527344c-2.6875 5.054687-7.949219 8.214844-13.671875 8.214844-5.726563 0-10.984375-3.160157-13.671875-8.214844l-18.164062-34.160156-18.164063 34.160156c-2.691406 5.054687-7.945313 8.214844-13.671875 8.214844s-10.984375-3.160157-13.671875-8.214844l-30.59375-57.527344-97.496094 148.433594c-2.722656 4.148437-3.113281 8.703125-1.066406 12.496094 2.046875 3.789062 6.066406 5.964843 11.03125 5.964843h327.257813c4.96875 0 8.988281-2.175781 11.035156-5.964843 2.042968-3.792969 1.65625-8.347657-1.070313-12.5zm0 0"/><path d="m162.289062 172.679688c2.6875-5.050782 7.949219-8.210938 13.671876-8.210938 5.726562 0 10.984374 3.160156 13.671874 8.214844l18.164063 34.15625 24.875-46.785156-45.992187-70.027344c-2.574219-3.917969-6.480469-6.160156-10.722657-6.160156-4.242187 0-8.148437 2.246093-10.71875 6.160156l-46 70.027344 24.882813 46.789062zm0 0"/><path d="m316.429688 88.875c24.5 0 44.4375-19.933594 44.4375-44.4375s-19.9375-44.4375-44.4375-44.4375c-24.503907 0-44.4375 19.933594-44.4375 44.4375s19.933593 44.4375 44.4375 44.4375zm0 0"/>
                            </svg>
                        );
                    case 'Rychlost větru':
                        return(
                            <svg viewBox="0 0 448 448" style={{fill: "#03d3fc"}} width="50" height="50">
                                <g><g><path d="M384,112c-35.297,0-64,28.711-64,64c0,8.836,7.156,16,16,16s16-7.164,16-16c0-17.649,14.359-32,32-32s32,14.351,32,32s-14.359,32-32,32H17.266c-8.844,0-16,7.164-16,16s7.156,16,16,16H384c35.297,0,64-28.711,64-64S419.297,112,384,112z"/></g></g><g><g><path d="M224,48c-35.297,0-64,28.711-64,64c0,8.836,7.156,16,16,16s16-7.164,16-16c0-17.649,14.359-32,32-32s32,14.351,32,32s-14.359,32-32,32H16c-8.844,0-16,7.164-16,16s7.156,16,16,16h208c35.297,0,64-28.711,64-64C288,76.711,259.297,48,224,48z"/></g></g><g><g><path d="M224,272H16c-8.844,0-16,7.164-16,16s7.156,16,16,16h208c17.641,0,32,14.351,32,32s-14.359,32-32,32s-32-14.351-32-32c0-8.836-7.156-16-16-16s-16,7.164-16,16c0,35.289,28.703,64,64,64c35.297,0,64-28.711,64-64C288,300.711,259.297,272,224,272z"/></g></g>
                            </svg>
                        );
                    case 'UV Index':
                        return(
                            <svg width="50" height="50px" viewBox="0 0 45.16 45.16" style={{fill: "#FFF44F"}}>
                                <g><g><path d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312S28.816,11.269,22.58,11.269z"/><g><g><path d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"/></g><g><path d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"/></g><g><path d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"/></g><g><path d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"/></g><g><path d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"/></g><g><path d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"/></g><g><path d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"/></g><g><path d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"/></g></g></g></g>
                            </svg>
                        );
                    case 'Východ slunce':
                        return(
                            <svg viewBox="0 0 387.162 387.162" style={{fill: "#FFA500"}} height="50" width="50">
                                <g><g><g><path d="M379.662,221.952H277.925c-3.799-43.259-40.098-77.193-84.344-77.193c-44.246,0-80.545,33.934-84.344,77.193H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h372.162c4.142,0,7.5-3.358,7.5-7.5C387.162,225.31,383.805,221.952,379.662,221.952z"/><path d="M340.664,259.581H46.498c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h294.166c4.143,0,7.5-3.358,7.5-7.5C348.164,262.938,344.807,259.581,340.664,259.581z"/><path d="M300.166,297.209H86.996c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h213.17c4.143,0,7.5-3.358,7.5-7.5C307.666,300.568,304.309,297.209,300.166,297.209z"/><path d="M193.578,118.952c4.142,0,7.499-3.358,7.499-7.5v-29c0-4.142-3.357-7.5-7.499-7.5c-4.142,0-7.5,3.358-7.5,7.5v29C186.078,115.594,189.436,118.952,193.578,118.952z"/><path d="M137.108,125.57c1.27,2.736,3.978,4.345,6.808,4.345c1.057,0,2.13-0.225,3.152-0.699c3.757-1.743,5.39-6.203,3.646-9.96L138.508,92.95c-1.744-3.757-6.203-5.391-9.96-3.646c-3.757,1.743-5.39,6.203-3.646,9.96L137.108,125.57z"/><path d="M76.486,140.265l22.145,18.725c1.409,1.191,3.128,1.773,4.839,1.773c2.131,0,4.247-0.903,5.731-2.658c2.674-3.163,2.278-7.895-0.885-10.569L86.171,128.81c-3.162-2.675-7.895-2.279-10.569,0.885C72.927,132.857,73.323,137.59,76.486,140.265z"/><path d="M49.825,197.835l27.969,7.664c0.663,0.182,1.33,0.268,1.986,0.268c3.295,0,6.316-2.188,7.229-5.52c1.095-3.995-1.256-8.121-5.252-9.215l-27.969-7.664c-3.993-1.092-8.121,1.256-9.215,5.251S45.83,196.74,49.825,197.835z"/><path d="M240.087,129.216c1.022,0.474,2.096,0.699,3.152,0.699c2.83,0,5.539-1.609,6.809-4.345l12.206-26.306c1.743-3.757,0.11-8.217-3.647-9.96c-3.762-1.745-8.218-0.111-9.961,3.646l-12.206,26.306C234.697,123.015,236.33,127.473,240.087,129.216z"/><path d="M283.687,160.762c1.71,0,3.431-0.582,4.839-1.773l22.145-18.725c3.163-2.674,3.559-7.407,0.885-10.57c-2.675-3.162-7.406-3.559-10.57-0.884l-22.145,18.725c-3.163,2.674-3.559,7.407-0.885,10.57C279.44,159.859,281.556,160.762,283.687,160.762z"/><path d="M300.146,200.247c0.913,3.331,3.934,5.52,7.229,5.52c0.655,0,1.322-0.087,1.986-0.268l27.97-7.664c3.994-1.095,6.346-5.221,5.251-9.215c-1.094-3.994-5.21-6.346-9.216-5.251l-27.97,7.664C301.402,192.127,299.051,196.253,300.146,200.247z"/></g></g></g>
                            </svg>
                        );
                    case 'Západ slunce':
                        return(
                            <svg height="50" viewBox="0 0 512 512" width="50" style={{fill: "#F94D00"}}>
                                <g><path d="m241 109.651h30v111h-30z"/><path d="m412.534 392.649c-7.555-79.808-74.748-142.248-156.534-142.248s-148.979 62.44-156.534 142.249h-99.466v30h512v-30h-99.466z"/><path d="m63.667 452.649h384.666v30h-384.666z"/><path d="m33.794 294.987h30v69.001h-30z" transform="matrix(.353 -.936 .936 .353 -276.716 258.874)"/><path d="m155.591 168.808h30v69.001h-30z" transform="matrix(.923 -.386 .386 .923 -65.198 81.492)"/><path d="m306.908 188.309h69.001v29.999h-69.001z" transform="matrix(.386 -.923 .923 .386 22.179 439.924)"/><path d="m428.705 314.488h69.001v30h-69.001z" transform="matrix(.936 -.353 .353 .936 -86.472 184.654)"/><path d="m69.528 180.677h30v111h-30z" transform="matrix(.707 -.707 .707 .707 -142.245 128.945)"/><path d="m371.973 221.177h111v30h-111z" transform="matrix(.707 -.707 .707 .707 -41.798 371.443)"/><path d="m464.477 148.701 45.989-45.988-21.213-21.213-20.383 20.382v-72.531h-30v72.531l-20.698-20.698-21.213 21.213 46.305 46.304z"/></g>
                            </svg>
                        );
                    case 'Synchronizace':
                        return(
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px" className="onHoverFade rotate">
                                <path d="M 25 5 C 14.351563 5 5.632813 13.378906 5.054688 23.890625 C 5.007813 24.609375 5.347656 25.296875 5.949219 25.695313 C 6.550781 26.089844 7.320313 26.132813 7.960938 25.804688 C 8.601563 25.476563 9.019531 24.828125 9.046875 24.109375 C 9.511719 15.675781 16.441406 9 25 9 C 29.585938 9 33.699219 10.925781 36.609375 14 L 34 14 C 33.277344 13.988281 32.609375 14.367188 32.246094 14.992188 C 31.878906 15.613281 31.878906 16.386719 32.246094 17.007813 C 32.609375 17.632813 33.277344 18.011719 34 18 L 40.261719 18 C 40.488281 18.039063 40.71875 18.039063 40.949219 18 L 44 18 L 44 8 C 44.007813 7.460938 43.796875 6.941406 43.414063 6.558594 C 43.03125 6.175781 42.511719 5.964844 41.96875 5.972656 C 40.867188 5.988281 39.984375 6.894531 40 8 L 40 11.777344 C 36.332031 7.621094 30.964844 5 25 5 Z M 43.03125 23.972656 C 41.925781 23.925781 40.996094 24.785156 40.953125 25.890625 C 40.488281 34.324219 33.558594 41 25 41 C 20.414063 41 16.304688 39.074219 13.390625 36 L 16 36 C 16.722656 36.011719 17.390625 35.632813 17.753906 35.007813 C 18.121094 34.386719 18.121094 33.613281 17.753906 32.992188 C 17.390625 32.367188 16.722656 31.988281 16 32 L 9.71875 32 C 9.507813 31.96875 9.296875 31.96875 9.085938 32 L 6 32 L 6 42 C 5.988281 42.722656 6.367188 43.390625 6.992188 43.753906 C 7.613281 44.121094 8.386719 44.121094 9.007813 43.753906 C 9.632813 43.390625 10.011719 42.722656 10 42 L 10 38.222656 C 13.667969 42.378906 19.035156 45 25 45 C 35.648438 45 44.367188 36.621094 44.945313 26.109375 C 44.984375 25.570313 44.800781 25.039063 44.441406 24.636719 C 44.078125 24.234375 43.570313 23.996094 43.03125 23.972656 Z"/>
                            </svg>
                        );
                    default: break;
                }
            })()
        }
        </>
    );
}

export default Icons;