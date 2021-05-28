const ThemeChange = () => (
  <div className="dropdown">
    <div className="m-1 btn btn-outline btn-primary" tabIndex={0}>
      Change Theme
    </div>
    <ul className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content">
      <li>
        <a tabIndex={0} data-set-theme="light" data-act-class="active">
          🌝  light
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="dark" data-act-class="active">
          🌚  dark
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="cupcake" data-act-class="active">
          🧁  cupcake
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="bumblebee" data-act-class="active">
          🐝  bumblebee
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="emerald" data-act-class="active">
          ✳️  Emerald
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="corporate" data-act-class="active">
          🏢  Corporate
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="synthwave" data-act-class="active">
          🌃  synthwave
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="retro" data-act-class="active">
          👴  retro
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="cyberpunk" data-act-class="active">
          🤖  cyberpunk
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="valentine" data-act-class="active">
          🌸  valentine
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="halloween" data-act-class="active">
          🎃  halloween
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="garden" data-act-class="active">
          🌷  garden
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="forest" data-act-class="active">
          🌲  forest
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="aqua" data-act-class="active">
          🐟  aqua
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="lofi" data-act-class="active">
          👓  lofi
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="pastel" data-act-class="active">
          🖍  pastel
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="fantasy" data-act-class="active">
          🧚‍♀️  fantasy
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="wireframe" data-act-class="active">
          📝  Wireframe
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="black" data-act-class="active">
          🏴  black
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="luxury" data-act-class="active">
          💎  luxury
        </a>
      </li>
      <li>
        <a tabIndex={0} data-set-theme="dracula" data-act-class="active">
          🧛‍♂️  dracula
        </a>
      </li>
    </ul>
  </div>
)

export default ThemeChange
