import React from 'react';

import styled from 'styled-components';

const Svg = styled.svg `

path {
  fill: white !important;
}
`

function Logo() {
  return (
    <Svg
      width='152'
      height='20'
      viewBox='0 0 152 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.46094 1.1875C9.67188 1.1875 10.9453 1.23047 12.2812 1.31641C13.6172 1.40234 15.0234 1.57031 16.5 1.82031V4.79688C15.9766 4.64844 15.3789 4.50781 14.707 4.375C14.1289 4.26562 13.4336 4.16016 12.6211 4.05859C11.8086 3.95703 10.8906 3.89062 9.86719 3.85938V19.0234H7.07812V3.85938C6.05469 3.89062 5.13672 3.95703 4.32422 4.05859C3.51172 4.16016 2.81641 4.26562 2.23828 4.375C1.56641 4.50781 0.96875 4.64844 0.445312 4.79688V1.82031C1.90625 1.57031 3.3125 1.40234 4.66406 1.31641C6.01562 1.23047 7.28125 1.1875 8.46094 1.1875ZM25.3594 1.09375C26.1406 1.09375 26.9375 1.13281 27.75 1.21094C28.5703 1.28125 29.3672 1.41016 30.1406 1.59766C30.9141 1.77734 31.6406 2.03125 32.3203 2.35938C33 2.67969 33.5938 3.08984 34.1016 3.58984C34.6172 4.08203 35.0234 4.67578 35.3203 5.37109C35.6172 6.05859 35.7656 6.86719 35.7656 7.79688C35.7656 9.07812 35.5352 10.1602 35.0742 11.043C34.6133 11.918 33.9844 12.625 33.1875 13.1641C33.5234 13.6797 33.8125 14.2188 34.0547 14.7812C34.2969 15.3438 34.4922 15.8906 34.6406 16.4219C34.7969 16.9453 34.9102 17.4336 34.9805 17.8867C35.0508 18.3398 35.0859 18.7188 35.0859 19.0234H32.0859C32.0859 18.5469 32.0469 18.0977 31.9688 17.6758C31.8906 17.2461 31.7812 16.8398 31.6406 16.457C31.5 16.0664 31.3359 15.6992 31.1484 15.3555C30.9688 15.0117 30.7734 14.6797 30.5625 14.3594C29.8203 14.5703 29.0352 14.7227 28.207 14.8164C27.3789 14.9023 26.5156 14.9453 25.6172 14.9453C25.0781 14.9453 24.5312 14.9297 23.9766 14.8984C23.4219 14.8672 22.875 14.8281 22.3359 14.7812V18.9766H19.4297V1.77344C19.6016 1.71875 19.875 1.65234 20.25 1.57422C20.6328 1.49609 21.082 1.42188 21.5977 1.35156C22.1211 1.28125 22.7031 1.22266 23.3438 1.17578C23.9844 1.12109 24.6562 1.09375 25.3594 1.09375ZM26.2031 3.67188C25.6875 3.67188 25.1953 3.69531 24.7266 3.74219C24.2578 3.78125 23.8477 3.82812 23.4961 3.88281C23.0742 3.94531 22.6875 4.01562 22.3359 4.09375V12.1094C22.5859 12.1641 22.8633 12.2109 23.168 12.25C23.4258 12.2891 23.7266 12.3242 24.0703 12.3555C24.4141 12.3789 24.7812 12.3906 25.1719 12.3906C25.6797 12.3906 26.2148 12.3789 26.7773 12.3555C27.3477 12.3242 27.9102 12.2578 28.4648 12.1562C29.0273 12.0547 29.5586 11.9062 30.0586 11.7109C30.5664 11.5078 31.0117 11.2422 31.3945 10.9141C31.7852 10.5781 32.0938 10.1641 32.3203 9.67188C32.5547 9.17969 32.6719 8.58594 32.6719 7.89062C32.6719 7.3125 32.5781 6.80469 32.3906 6.36719C32.2031 5.92969 31.9492 5.55469 31.6289 5.24219C31.3086 4.92969 30.9336 4.67188 30.5039 4.46875C30.082 4.26562 29.6289 4.10547 29.1445 3.98828C28.668 3.87109 28.1758 3.78906 27.668 3.74219C27.168 3.69531 26.6797 3.67188 26.2031 3.67188ZM46.7109 0.695312C47.1953 0.695312 47.6875 0.746094 48.1875 0.847656C48.6875 0.941406 49.1328 1.07031 49.5234 1.23438C50.2109 2.4375 50.8359 3.66406 51.3984 4.91406C51.9688 6.15625 52.4766 7.4375 52.9219 8.75781C53.2266 8.79688 53.5352 8.83984 53.8477 8.88672C54.1602 8.92578 54.4766 8.96875 54.7969 9.01562V12.0156L53.7891 11.7344C54.0703 12.8984 54.3086 14.0859 54.5039 15.2969C54.6992 16.5078 54.8438 17.7422 54.9375 19H52.1484C52.0312 17.6562 51.8359 16.3281 51.5625 15.0156C51.2891 13.7031 50.9766 12.4453 50.625 11.2422C49.8672 11.1797 49.1445 11.1328 48.457 11.1016C47.7773 11.0703 47.1953 11.0547 46.7109 11.0547C46.0625 11.0547 45.418 11.0664 44.7773 11.0898C44.1367 11.1133 43.4922 11.1562 42.8438 11.2188C42.4922 12.4219 42.1758 13.6797 41.8945 14.9922C41.6211 16.3047 41.4297 17.6406 41.3203 19H38.5312C38.6172 17.7422 38.7539 16.5117 38.9414 15.3086C39.1367 14.1055 39.375 12.9219 39.6562 11.7578L38.7422 12.0156V9.01562L40.5469 8.75781C40.9844 7.4375 41.4844 6.15625 42.0469 4.91406C42.6172 3.66406 43.25 2.4375 43.9453 1.23438C44.3359 1.07031 44.7773 0.941406 45.2695 0.847656C45.7617 0.746094 46.2422 0.695312 46.7109 0.695312ZM46.7109 8.40625C47.1797 8.40625 47.6641 8.41406 48.1641 8.42969C48.6641 8.4375 49.1797 8.46094 49.7109 8.5C49.3125 7.41406 48.918 6.47266 48.5273 5.67578C48.1445 4.87109 47.8125 4.25 47.5312 3.8125C47.3906 3.75 47.2578 3.70703 47.1328 3.68359C47.0078 3.66016 46.8672 3.64844 46.7109 3.64844C46.4609 3.64844 46.2031 3.70312 45.9375 3.8125C45.6562 4.25 45.3203 4.87109 44.9297 5.67578C44.5391 6.47266 44.1484 7.41406 43.7578 8.5C44.2734 8.46094 44.7773 8.4375 45.2695 8.42969C45.7695 8.41406 46.25 8.40625 46.7109 8.40625ZM66.2344 0.835938C67.4141 0.835938 68.5312 0.941406 69.5859 1.15234C70.6406 1.35547 71.5586 1.64453 72.3398 2.01953C73.1289 2.39453 73.7539 2.84375 74.2148 3.36719C74.6758 3.88281 74.9062 4.45312 74.9062 5.07812V7.14062H71.8125V5.99219C71.8125 5.65625 71.6836 5.33594 71.4258 5.03125C71.168 4.71875 70.7969 4.44922 70.3125 4.22266C69.8359 3.98828 69.2539 3.80469 68.5664 3.67188C67.8789 3.53125 67.1016 3.46094 66.2344 3.46094C65.3984 3.46094 64.6367 3.52734 63.9492 3.66016C63.2617 3.78516 62.6719 3.96094 62.1797 4.1875C61.6875 4.41406 61.3047 4.68359 61.0312 4.99609C60.7656 5.30078 60.6328 5.63281 60.6328 5.99219V14.2656C60.6328 14.6094 60.7656 14.9336 61.0312 15.2383C61.3047 15.543 61.6875 15.8086 62.1797 16.0352C62.6719 16.2539 63.2617 16.4297 63.9492 16.5625C64.6367 16.6875 65.3984 16.75 66.2344 16.75C67.1016 16.75 67.8789 16.6836 68.5664 16.5508C69.2539 16.4102 69.8359 16.2266 70.3125 16C70.7969 15.7734 71.168 15.5117 71.4258 15.2148C71.6836 14.9102 71.8125 14.5938 71.8125 14.2656V13.0938H74.9062V15.1562C74.9062 15.5703 74.8008 15.9648 74.5898 16.3398C74.3789 16.707 74.082 17.0469 73.6992 17.3594C73.3242 17.6719 72.8711 17.9531 72.3398 18.2031C71.8164 18.4453 71.2305 18.6562 70.582 18.8359C69.9414 19.0078 69.2539 19.1406 68.5195 19.2344C67.7852 19.3281 67.0234 19.375 66.2344 19.375C65.4453 19.375 64.6836 19.3281 63.9492 19.2344C63.2148 19.1406 62.5234 19.0078 61.875 18.8359C61.2344 18.6562 60.6484 18.4453 60.1172 18.2031C59.5938 17.9531 59.1406 17.6719 58.7578 17.3594C58.3828 17.0469 58.0898 16.707 57.8789 16.3398C57.668 15.9648 57.5625 15.5703 57.5625 15.1562V5.07812C57.5625 4.66406 57.668 4.26953 57.8789 3.89453C58.0898 3.51953 58.3828 3.17578 58.7578 2.86328C59.1406 2.55078 59.5938 2.26953 60.1172 2.01953C60.6484 1.76953 61.2344 1.55859 61.875 1.38672C62.5234 1.20703 63.2148 1.07031 63.9492 0.976562C64.6836 0.882812 65.4453 0.835938 66.2344 0.835938ZM84.4453 1.1875C85.6562 1.1875 86.9297 1.23047 88.2656 1.31641C89.6016 1.40234 91.0078 1.57031 92.4844 1.82031V4.79688C91.9609 4.64844 91.3633 4.50781 90.6914 4.375C90.1133 4.26562 89.418 4.16016 88.6055 4.05859C87.793 3.95703 86.875 3.89062 85.8516 3.85938V19.0234H83.0625V3.85938C82.0391 3.89062 81.1211 3.95703 80.3086 4.05859C79.4961 4.16016 78.8008 4.26562 78.2227 4.375C77.5508 4.50781 76.9531 4.64844 76.4297 4.79688V1.82031C77.8906 1.57031 79.2969 1.40234 80.6484 1.31641C82 1.23047 83.2656 1.1875 84.4453 1.1875ZM102.68 1.16406C103.891 1.16406 105.168 1.20703 106.512 1.29297C107.855 1.37891 109.258 1.54688 110.719 1.79688V4.77344C110.195 4.625 109.598 4.48438 108.926 4.35156C108.348 4.24219 107.652 4.13672 106.84 4.03516C106.027 3.93359 105.109 3.86719 104.086 3.83594V16.3281C105.109 16.2969 106.027 16.2305 106.84 16.1289C107.652 16.0273 108.348 15.9219 108.926 15.8125C109.598 15.6797 110.195 15.5391 110.719 15.3906V18.3672C109.258 18.6172 107.855 18.7852 106.512 18.8711C105.168 18.957 103.891 19 102.68 19C101.5 19 100.238 18.957 98.8945 18.8711C97.5508 18.7852 96.1406 18.6172 94.6641 18.3672V15.3906C95.1875 15.5391 95.7852 15.6797 96.457 15.8125C97.0352 15.9219 97.7305 16.0273 98.543 16.1289C99.3555 16.2305 100.273 16.2969 101.297 16.3281V3.83594C100.273 3.86719 99.3555 3.93359 98.543 4.03516C97.7305 4.13672 97.0352 4.24219 96.457 4.35156C95.7852 4.48438 95.1875 4.625 94.6641 4.77344V1.79688C96.1406 1.54688 97.5508 1.37891 98.8945 1.29297C100.238 1.20703 101.5 1.16406 102.68 1.16406ZM122.555 0.695312C123.039 0.695312 123.531 0.746094 124.031 0.847656C124.531 0.941406 124.977 1.07031 125.367 1.23438C126.055 2.4375 126.68 3.66406 127.242 4.91406C127.812 6.15625 128.32 7.4375 128.766 8.75781C129.07 8.79688 129.379 8.83984 129.691 8.88672C130.004 8.92578 130.32 8.96875 130.641 9.01562V12.0156L129.633 11.7344C129.914 12.8984 130.152 14.0859 130.348 15.2969C130.543 16.5078 130.688 17.7422 130.781 19H127.992C127.875 17.6562 127.68 16.3281 127.406 15.0156C127.133 13.7031 126.82 12.4453 126.469 11.2422C125.711 11.1797 124.988 11.1328 124.301 11.1016C123.621 11.0703 123.039 11.0547 122.555 11.0547C121.906 11.0547 121.262 11.0664 120.621 11.0898C119.98 11.1133 119.336 11.1562 118.688 11.2188C118.336 12.4219 118.02 13.6797 117.738 14.9922C117.465 16.3047 117.273 17.6406 117.164 19H114.375C114.461 17.7422 114.598 16.5117 114.785 15.3086C114.98 14.1055 115.219 12.9219 115.5 11.7578L114.586 12.0156V9.01562L116.391 8.75781C116.828 7.4375 117.328 6.15625 117.891 4.91406C118.461 3.66406 119.094 2.4375 119.789 1.23438C120.18 1.07031 120.621 0.941406 121.113 0.847656C121.605 0.746094 122.086 0.695312 122.555 0.695312ZM122.555 8.40625C123.023 8.40625 123.508 8.41406 124.008 8.42969C124.508 8.4375 125.023 8.46094 125.555 8.5C125.156 7.41406 124.762 6.47266 124.371 5.67578C123.988 4.87109 123.656 4.25 123.375 3.8125C123.234 3.75 123.102 3.70703 122.977 3.68359C122.852 3.66016 122.711 3.64844 122.555 3.64844C122.305 3.64844 122.047 3.70312 121.781 3.8125C121.5 4.25 121.164 4.87109 120.773 5.67578C120.383 6.47266 119.992 7.41406 119.602 8.5C120.117 8.46094 120.621 8.4375 121.113 8.42969C121.613 8.41406 122.094 8.40625 122.555 8.40625ZM147.047 14.3828V1.32812C147.719 1.35156 148.348 1.39453 148.934 1.45703C149.527 1.51172 150.051 1.57031 150.504 1.63281C151.027 1.71094 151.516 1.78906 151.969 1.86719V4.84375C151.344 4.65625 150.625 4.49219 149.812 4.35156V16.1641C150.234 16.1016 150.621 16.0273 150.973 15.9414C151.332 15.8555 151.664 15.7656 151.969 15.6719V18.4375C151.406 18.5312 150.895 18.6094 150.434 18.6719C149.973 18.7344 149.543 18.7852 149.145 18.8242C148.754 18.8633 148.387 18.8945 148.043 18.918C147.699 18.9414 147.367 18.9609 147.047 18.9766L139.195 5.94531V18.9766C138.875 18.9609 138.543 18.9414 138.199 18.918C137.855 18.8945 137.488 18.8633 137.098 18.8242C136.707 18.7852 136.281 18.7344 135.82 18.6719C135.359 18.6094 134.852 18.5312 134.297 18.4375V15.4609C134.875 15.6484 135.594 15.8125 136.453 15.9531V4.11719C136.039 4.1875 135.652 4.26562 135.293 4.35156C134.934 4.4375 134.602 4.52344 134.297 4.60938V1.86719C134.734 1.78906 135.215 1.71094 135.738 1.63281C136.184 1.57031 136.703 1.51172 137.297 1.45703C137.891 1.39453 138.523 1.35156 139.195 1.32812L147.047 14.3828Z'
        fill='white'
      />
    </Svg>
  );
}

export default Logo;
