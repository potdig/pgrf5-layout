<div id="container">
  <slot />
</div>

<style>
  #container {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
  }
</style>
