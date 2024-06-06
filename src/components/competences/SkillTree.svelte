<script>
  import { writable } from "svelte/store";

  export let categories = [];

  let tooltip = writable({ show: false, x: 0, y: 0, text: "" });

  function showTooltip(event, text) {
    tooltip.set({ show: true, x: event.pageX, y: event.pageY, text });
  }

  function hideTooltip() {
    tooltip.set({ show: false, x: 0, y: 0, text: "" });
  }

  let size = 500;
  let centerX = size / 2;
  let centerY = size / 2;
  let radius = size / 4;

  const colors = ["ee69D8", "ae47D8"];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<section class="skills">
  <div class="skill-tree">
    <svg {size} viewBox="0 0 {size} {size}">
      <circle
        cx={centerX}
        cy={centerY}
        r="30"
        class="center-icon"
        on:mouseenter={(e) => showTooltip(e, "Moi !")}
        on:mouseleave={hideTooltip}
      />
      {#each categories as category, index}
        <g>
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX +
              radius * Math.cos((2 * Math.PI * index) / categories.length)}
            y2={centerY +
              radius * Math.sin((2 * Math.PI * index) / categories.length)}
            class="connection-line"
          />
          {#each category.skills as skill, skillIndex}
            <g>
              <line
                x1={centerX +
                  radius * Math.cos((2 * Math.PI * index) / categories.length)}
                y1={centerY +
                  radius * Math.sin((2 * Math.PI * index) / categories.length)}
                x2={centerX +
                  (radius + 40) *
                    Math.cos(
                      (2 * Math.PI * index) / categories.length + skillIndex / 5
                    )}
                y2={centerY +
                  (radius + 40) *
                    Math.sin(
                      (2 * Math.PI * index) / categories.length + skillIndex / 5
                    )}
                class="connection-line"
              />
              <circle
                cx={centerX +
                  (radius + 40) *
                    Math.cos(
                      (2 * Math.PI * index) / categories.length + skillIndex / 5
                    )}
                cy={centerY +
                  (radius + 40) *
                    Math.sin(
                      (2 * Math.PI * index) / categories.length + skillIndex / 5
                    )}
                r="15"
                class="skill-icon"
                on:mouseenter={(e) => showTooltip(e, skill.name)}
                on:mouseleave={hideTooltip}
                fill={`#${colors[0]}`}
              />
              <image
                on:mouseenter={(e) => showTooltip(e, skill.name)}
                on:mouseleave={hideTooltip}
                href={skill.icon}
                x={centerX +
                  (radius + 40) *
                    Math.cos(
                      (2 * Math.PI * index) / categories.length + skillIndex / 5
                    ) -
                  7.5}
                y={centerY +
                  (radius + 40) *
                    Math.sin(
                      (2 * Math.PI * index) / categories.length + skillIndex / 5
                    ) -
                  7.5}
                width="15"
                height="15"
              />
            </g>
          {/each}
          <circle
            cx={centerX +
              radius * Math.cos((2 * Math.PI * index) / categories.length)}
            cy={centerY +
              radius * Math.sin((2 * Math.PI * index) / categories.length)}
            r="20"
            class="category-icon"
            on:mouseenter={(e) => showTooltip(e, category.name)}
            on:mouseleave={hideTooltip}
            fill={`#${colors[1]}`}
          />
          <image
            on:mouseenter={(e) => showTooltip(e, category.name)}
            on:mouseleave={hideTooltip}
            href={category.icon}
            x={centerX +
              radius * Math.cos((2 * Math.PI * index) / categories.length) -
              10}
            y={centerY +
              radius * Math.sin((2 * Math.PI * index) / categories.length) -
              10}
            width="20"
            height="20"
          />
        </g>
      {/each}
      <image
        href="/icons/face.svg"
        x={centerX - 20}
        y={centerY - 20}
        width="40"
        height="40"
        on:mouseenter={(e) => showTooltip(e, "Moi !")}
        on:mouseleave={hideTooltip}
      />
    </svg>
    {#if $tooltip.show}
      <div class="tooltip" style="top: {$tooltip.y}px; left: {$tooltip.x}px;">
        {$tooltip.text}
      </div>
    {/if}
  </div>
  <div class="textes">
    <h2>Compétences</h2>
    <p>
      Voici un aperçu de mes compétences. Passez votre souris sur les icônes
      pour en savoir plus !
    </p>
  </div>
</section>

<style>
  .textes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    text-align: center;
  }

  .textes h2 {
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-family: var(--title-font);
  }

  .skills {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
  }

  .skill-tree {
    position: relative;
    width: 50%;
  }

  .skill-tree svg {
    width: 100%;
    height: 100%;
  }

  .center-icon {
    fill: var(--primary-color);
  }

  .category-icon {
    cursor: pointer;
  }

  .skill-icon {
    cursor: pointer;
  }

  .connection-line {
    stroke: var(--primary-color);
    stroke-width: 2;
  }

  .tooltip {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    pointer-events: none;
    white-space: nowrap;
    font-size: 0.9rem;
    transform: translate(-50%, -100%);
  }
</style>
