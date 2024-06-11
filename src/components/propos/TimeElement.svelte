<script>
  export let title;
  export let date;
  export let active = false;
  export let content;
  export let goto;
  export let index;
  export let lastIndex;

  import Body from "./Body.svelte";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="time-element {active ? 'active' : ''}">
  <div class="indicator" on:click={goto(index)}>
    <div class="circle {active ? 'active' : ''}"></div>
    <div class="line {lastIndex == index ? 'last' : ''}"></div>
  </div>
  <div class="content" on:click={goto(index)}>
    <h3>{title}</h3>
    <h4>{date}</h4>
  </div>
  {#if content && active}
    <div class="body">
      <Body {...content} />
    </div>
  {/if}
</div>

<style>
  .time-element {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    position: relative;

    transition: all 0.5s;
  }
  .time-element.active {
    height: 33vh;
  }

  .indicator {
    position: relative;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    cursor: pointer;
  }

  .circle {
    width: 15px;
    height: 15px;
    background-color: #aaa;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .circle::after {
    --size: 33px;
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--size);
    height: var(--size);
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
  }
  .circle.active::after {
    --size: 33px;
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--size);
    height: var(--size);
    background-color: transparent;
    border: 3px solid var(--primary-color);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 2s;
  }

  .line {
    width: 2px;
    background-color: #aaa;
    flex-grow: 1;
    margin-top: -5px;
    height: 100%;
  }
  .line.last::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    background-color: #aaa;
    transform: translate(-50%, 50%);
    transition: all 0.5s;
    border-radius: 50%;
  }

  .content {
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    position: absolute;
    top: 0;
    left: 2rem;

    transform: translateY(-25%);

    cursor: pointer;
  }

  .content h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--text-color);
  }

  .content h4 {
    margin: 0;
    font-size: 0.9rem;
    color: #bbb;
  }

  .body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
