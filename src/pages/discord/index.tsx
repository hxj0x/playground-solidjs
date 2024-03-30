import avatar from "../../assets/avatar.png";

export const DiscordPage = () => {
  return (
    <>
      <div class="bg-gray-700 min-h-screen items-center justify-center flex text-white">
        <div class="flex">
          <img src={avatar} alt="avatar" class="w-10 h-10 rounded-full mr-4" />
          <div>
            <p class="items-baseline flex">
              <span class="text-green-500/80 mr-2 text-sm">前端暴走团</span>
              <span class="text-xs text-gray-500">2024-3-30</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              sint sunt impedit? Dicta debitis perspiciatis quisquam atque,
              nulla, earum rem, amet repudiandae at adipisci voluptate. Harum a
              sequi perferendis eligendi cumque quas eaque architecto aliquam
              quo quis magnam cupiditate ratione vel quod, at exercitationem
              veritatis, sed minima mollitia animi iste voluptas. Inventore
              dolorem, repellendus corrupti natus totam quibusdam optio placeat
              sit. Ipsam totam tempora libero. Incidunt excepturi eum et odit
              illum fugit voluptates ad veritatis molestiae id, non perferendis
              consectetur!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
