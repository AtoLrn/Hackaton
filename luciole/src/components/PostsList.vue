<template>

  <RouterLink to="/actualites/1"  v-for="post in posts" :key="post.id" class="post w-full overflow-hidden relative shadow-md rounded-md">

    <div class="content absolute inset-0 z-10 flex flex-col justify-between p-4">

      <div>
        <p class="pill text-sm w-fit ml-auto px-3 py-1 rounded-3xl">{{post.type}}</p>
      </div>

      <div>
        <div class="text-white flex items-center text-sm">
          <p class="font-light">{{post.source}}</p>&nbsp;|&nbsp;<p>{{post.date}}</p>
        </div>
        <h3 class="text-lg font-medium text-white mb-2">{{post.title}}</h3>
        <p class="text-white text-sm">{{post.content}}</p>
        <div class="flex justify-between pt-2">
          <div class="text-white flex">
            <div>
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6702 17.8328L17.3388 11.8283C17.8697 11.8283 18.3788 12.0392 18.7541 12.4146C19.1295 12.7899 19.3403 13.299 19.3403 13.8298V16.4985H23.1165C23.3099 16.4963 23.5015 16.5362 23.678 16.6154C23.8544 16.6946 24.0116 16.8112 24.1385 16.9572C24.2654 17.1032 24.3591 17.275 24.413 17.4607C24.4669 17.6465 24.4798 17.8417 24.4508 18.033L23.5301 24.0375C23.4819 24.3556 23.3203 24.6457 23.0751 24.8541C22.8299 25.0625 22.5176 25.1753 22.1958 25.1717H14.6702M14.6702 17.8328V25.1717M14.6702 17.8328H12.6687C12.3148 17.8328 11.9754 17.9734 11.7252 18.2237C11.4749 18.4739 11.3344 18.8133 11.3344 19.1672V23.8373C11.3344 24.1912 11.4749 24.5306 11.7252 24.7808C11.9754 25.0311 12.3148 25.1717 12.6687 25.1717H14.6702" stroke="white" stroke-width="1.33433" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="px-6">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4049_8057)">
                  <path d="M21.3559 19.1672L18.6872 25.1717C18.1564 25.1717 17.6473 24.9608 17.2719 24.5854C16.8966 24.2101 16.6857 23.701 16.6857 23.1702V20.5015H12.9096C12.7161 20.5037 12.5246 20.4638 12.3481 20.3846C12.1716 20.3054 12.0145 20.1888 11.8876 20.0428C11.7606 19.8968 11.667 19.725 11.613 19.5393C11.5591 19.3535 11.5462 19.1583 11.5752 18.967L12.4959 12.9625C12.5442 12.6444 12.7058 12.3543 12.951 12.1459C13.1962 11.9375 13.5085 11.8247 13.8302 11.8283H21.3559M21.3559 19.1672V11.8283M21.3559 19.1672H23.1372C23.5148 19.1738 23.8817 19.0416 24.1682 18.7957C24.4548 18.5497 24.6411 18.2071 24.6917 17.8328V13.1627C24.6411 12.7884 24.4548 12.4458 24.1682 12.1998C23.8817 11.9539 23.5148 11.8217 23.1372 11.8283H21.3559" stroke="white" stroke-width="1.33433" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_4049_8057">
                    <rect width="16.012" height="16.012" fill="white" transform="translate(10.014 10.494)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div class="text-gray-400 flex items-center">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_4049_8061" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="14" height="13">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33337 2.83333C2.17866 2.83333 2.03029 2.89479 1.9209 3.00419C1.8115 3.11358 1.75004 3.26196 1.75004 3.41667V11.5833C1.75004 11.738 1.8115 11.8864 1.9209 11.9958C2.03029 12.1052 2.17866 12.1667 2.33337 12.1667H11.6667C11.8214 12.1667 11.9698 12.1052 12.0792 11.9958C12.1886 11.8864 12.25 11.738 12.25 11.5833V5.16667C12.25 5.01196 12.1886 4.86358 12.0792 4.75419C11.9698 4.64479 11.8214 4.58333 11.6667 4.58333H6.41671C6.22167 4.58333 6.03953 4.48586 5.93134 4.32358L4.93785 2.83333H2.33337ZM1.09594 2.17923C1.42413 1.85104 1.86925 1.66667 2.33337 1.66667H5.25004C5.44508 1.66667 5.62722 1.76414 5.7354 1.92643L6.7289 3.41667H11.6667C12.1308 3.41667 12.576 3.60104 12.9041 3.92923C13.2323 4.25742 13.4167 4.70254 13.4167 5.16667V11.5833C13.4167 12.0475 13.2323 12.4926 12.9041 12.8208C12.576 13.149 12.1308 13.3333 11.6667 13.3333H2.33337C1.86925 13.3333 1.42413 13.149 1.09594 12.8208C0.767748 12.4926 0.583374 12.0475 0.583374 11.5833V3.41667C0.583374 2.95254 0.767748 2.50742 1.09594 2.17923Z" fill="#97A0AF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00008 6.33333C7.32225 6.33333 7.58342 6.5945 7.58342 6.91667V10.4167C7.58342 10.7388 7.32225 11 7.00008 11C6.67792 11 6.41675 10.7388 6.41675 10.4167V6.91667C6.41675 6.5945 6.67792 6.33333 7.00008 6.33333Z" fill="#1F2F42"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66675 8.66667C4.66675 8.3445 4.92792 8.08333 5.25008 8.08333H8.75008C9.07225 8.08333 9.33341 8.3445 9.33341 8.66667C9.33341 8.98883 9.07225 9.25 8.75008 9.25H5.25008C4.92792 9.25 4.66675 8.98883 4.66675 8.66667Z" fill="#1F2F42"/>
              </mask>
              <g mask="url(#mask0_4049_8061)">
                <rect y="0.5" width="14" height="14" fill="#8696A9"/>
              </g>
            </svg>
            &nbsp;
            Sauvegarder
          </div>
        </div>
      </div>

    </div>

    <img src="/img/post.jpg" alt="Image de la carte" class="object-cover h-full w-full">

  </RouterLink>

</template>

<script lang="ts">
export default {
  props: {
    posts: {
      type: Array,
      required: true
    } as any,
  }
}
</script>

<style lang="scss" scoped>

.post {
  height: 50vh;
  transition: transform 0.2s ease-in-out,
              box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--box-shadow-dark);
    cursor: pointer;
  }

  .content {
    background-image: linear-gradient(to top, #000000a3, #ffffff00);

    .pill {
      background-color: #FFBE1A;
      color: #355070;
    }


    h3 {
      font-size: 1.25rem;
      font-family: var(--font-title);
    }

  }

}

</style>
