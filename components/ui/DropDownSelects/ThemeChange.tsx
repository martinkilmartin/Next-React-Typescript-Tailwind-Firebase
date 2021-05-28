const ThemeChange = () => (
  <div className="dropdown">
    <div className="m-1 btn btn-outline btn-primary" tabIndex={0}>
      Change Theme
    </div>
    <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a
          tabIndex={0}
          data-set-theme="light"
          data-act-class="active"
          className="active"
        >
          🌝  light
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="dark"
          data-act-class="active"
          className=""
        >
          🌚  dark
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="cupcake"
          data-act-class="active"
          className=""
        >
          🧁  cupcake
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="bumblebee"
          data-act-class="active"
          className=""
        >
          🐝  bumblebee
        </a>
      </li>
      <li>
        <a data-set-theme="emerald" data-act-class="active" className="">
          ✳️  Emerald
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="corporate"
          data-act-class="active"
          className=""
        >
          🏢  Corporate
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="synthwave"
          data-act-class="active"
          className=""
        >
          🌃  synthwave
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="retro"
          data-act-class="active"
          className=""
        >
          👴  retro
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="cyberpunk"
          data-act-class="active"
          className=""
        >
          🤖  cyberpunk
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="valentine"
          data-act-class="active"
          className=""
        >
          🌸  valentine
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="halloween"
          data-act-class="active"
          className=""
        >
          🎃  halloween
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="garden"
          data-act-class="active"
          className=""
        >
          🌷  garden
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="forest"
          data-act-class="active"
          className=""
        >
          🌲  forest
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="aqua"
          data-act-class="active"
          className=""
        >
          🐟  aqua
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="lofi"
          data-act-class="active"
          className=""
        >
          👓  lofi
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="pastel"
          data-act-class="active"
          className=""
        >
          🖍  pastel
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="fantasy"
          data-act-class="active"
          className=""
        >
          🧚‍♀️  fantasy
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="wireframe"
          data-act-class="active"
          className=""
        >
          📝  Wireframe
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="black"
          data-act-class="active"
          className=""
        >
          🏴  black
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="luxury"
          data-act-class="active"
          className=""
        >
          💎  luxury
        </a>
      </li>
      <li>
        <a
          tabIndex={0}
          data-set-theme="dracula"
          data-act-class="active"
          className=""
        >
          🧛‍♂️  dracula
        </a>
      </li>
    </ul>
  </div>
)

export default ThemeChange
