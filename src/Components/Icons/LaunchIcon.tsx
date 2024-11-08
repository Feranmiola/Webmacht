'use client'
import React from 'react'
import { motion } from 'framer-motion'

const LaunchIcon = () => {
    return (
        <motion.svg
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{
                y: -20, // Move upward on hover to simulate a launch
                scale: 1.2,
                opacity: 0.8,
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                    duration: 0.5,
                    ease: 'easeInOut',
                },
            }}
        >
            <path
                d="M32.5008 51.3672C32.5008 51.5993 32.4087 51.8218 32.2446 51.9859C32.0805 52.15 31.8579 52.2422 31.6258 52.2422H24.6259C24.3938 52.2422 24.1712 52.15 24.0071 51.9859C23.843 51.8218 23.7508 51.5993 23.7508 51.3672C23.7508 51.1351 23.843 50.9126 24.0071 50.7485C24.1712 50.5844 24.3938 50.4922 24.6259 50.4922H31.6258C31.8579 50.4922 32.0805 50.5844 32.2446 50.7485C32.4087 50.9126 32.5008 51.1351 32.5008 51.3672ZM28.1259 25.9922C28.472 25.9922 28.8103 25.8896 29.0981 25.6973C29.3859 25.505 29.6102 25.2317 29.7426 24.9119C29.8751 24.5921 29.9097 24.2403 29.8422 23.9008C29.7747 23.5613 29.608 23.2495 29.3633 23.0048C29.1185 22.76 28.8067 22.5934 28.4673 22.5258C28.1278 22.4583 27.7759 22.493 27.4562 22.6254C27.1364 22.7579 26.8631 22.9822 26.6708 23.27C26.4785 23.5577 26.3759 23.8961 26.3759 24.2422C26.3759 24.7063 26.5602 25.1515 26.8884 25.4796C27.2166 25.8078 27.6617 25.9922 28.1259 25.9922ZM48.1896 36.2735L45.4837 48.436C45.3889 48.8716 45.1838 49.2755 44.8881 49.6092C44.5924 49.9428 44.216 50.1949 43.7949 50.3413C43.5138 50.4402 43.218 50.4912 42.9199 50.4922C42.3294 50.4918 41.7565 50.2913 41.2946 49.9235L35.093 45.2422H21.1587L14.9593 49.9235C14.4974 50.2913 13.9245 50.4918 13.334 50.4922C13.0359 50.4912 12.7401 50.4402 12.459 50.3413C12.0379 50.1949 11.6615 49.9428 11.3658 49.6092C11.0701 49.2755 10.865 48.8716 10.7702 48.436L8.0621 36.2735C7.97535 35.8818 7.97954 35.4754 8.07434 35.0856C8.16914 34.6957 8.35204 34.3328 8.60898 34.0247L15.0293 26.3181C15.7512 14.6522 24.1796 7.35689 26.518 5.55001C26.9782 5.19348 27.5438 5 28.1259 5C28.7079 5 29.2735 5.19348 29.7337 5.55001C32.0721 7.35689 40.5005 14.6522 41.2224 26.3181L47.6427 34.0247C47.8997 34.3328 48.0826 34.6957 48.1774 35.0856C48.2722 35.4754 48.2763 35.8818 48.1896 36.2735ZM21.3687 43.4922H34.883C46.9537 22.5994 31.8446 9.37814 28.664 6.92595C28.5102 6.80604 28.3208 6.74091 28.1259 6.74091C27.9309 6.74091 27.7415 6.80604 27.5877 6.92595C24.4071 9.37814 9.29804 22.5994 21.3687 43.4922ZM19.7237 44.1331C16.5583 38.5835 15.2043 33.5435 15.0008 29.0678L9.9521 35.136C9.86647 35.2388 9.80558 35.3599 9.7741 35.49C9.74263 35.6201 9.74141 35.7556 9.77054 35.8863L12.4743 48.0553C12.5063 48.2007 12.5748 48.3355 12.6735 48.447C12.7721 48.5585 12.8975 48.643 13.0379 48.6925C13.1783 48.742 13.329 48.7548 13.4757 48.7299C13.6224 48.7049 13.7604 48.6429 13.8765 48.5497L13.8962 48.5344L19.7237 44.1331ZM46.2996 35.136L41.2509 29.0678C41.0562 33.5435 39.7021 38.5835 36.5368 44.1331L42.3643 48.5344L42.384 48.5497C42.5001 48.6429 42.638 48.7049 42.7847 48.7299C42.9315 48.7548 43.0822 48.742 43.2226 48.6925C43.3629 48.643 43.4884 48.5585 43.587 48.447C43.6856 48.3355 43.7542 48.2007 43.7862 48.0553L46.4899 35.8863C46.5179 35.755 46.5152 35.619 46.4822 35.4889C46.4492 35.3588 46.3867 35.238 46.2996 35.136Z"
                fill="#54FCFC"
            />
        </motion.svg>
    )
}

export default LaunchIcon
