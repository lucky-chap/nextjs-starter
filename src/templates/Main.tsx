import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <main className="w-full px-1 text-gray-700 font-body antialiased">
    {props.meta}

    <div className="">
      <div className="">{props.children}</div>
    </div>
  </main>
);

export { Main };
