const Tours = () => (
  <div className="container px-4">
    <div className="card lg:card-side bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Horizontal</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-ghost">More info</button>
        </div>
      </div>
    </div>
    <div className="card lg:card-side bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Horizontal
          <div className="mx-2 badge">NEW</div>
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-ghost">More info</button>
        </div>
      </div>
    </div>

    <div className="card bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Top image
          <div className="mx-2 badge badge-secondary">NEW</div>
        </h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
    <div className="card bordered">
      <div className="card-body">
        <h2 className="card-title">Image bottom</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-ghost">Register</button>
        </div>
      </div>
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
    </div>
    <div className="card bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/60/40" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Small image file</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <div className="badge badge-ghost">Article</div>
          <div className="badge badge-ghost">Photography</div>
        </div>
      </div>
    </div>
    <div className="text-center shadow-2xl card">
      <figure className="px-10 pt-10">
        <img
          src="https://picsum.photos/id/1005/400/250"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">shadow, center, padding</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="justify-center card-actions">
          <button className="btn btn-outline btn-accent">More info</button>
        </div>
      </div>
    </div>
    <div className="shadow-xl card image-full">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div className="justify-end card-body">
        <h2 className="card-title">Image overlay</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <div className="shadow-sm card bg-accent text-accent-content">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Accent color</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
  </div>
)

export default Tours
