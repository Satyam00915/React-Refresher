import React, { useRef } from "react";

const Navigator = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 50,
        scrollBehavior: "smooth",
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => {
            ref1.current.scrollIntoView();
          }}
        >
          Go To Section 1
        </button>
        <button
          onClick={() => {
            ref2.current.scrollIntoView();
          }}
        >
          Go To Section 2
        </button>
        <button
          onClick={() => {
            ref3.current.scrollIntoView();
          }}
        >
          Go To Section 3
        </button>
      </div>
      <section ref={ref1}>
        <h3>Section 1</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
        inventore facilis dolorum at iure unde, perferendis sed est qui sequi
        nam, quas, suscipit eveniet accusantium! Architecto illum exercitationem
        mollitia blanditiis, incidunt inventore laboriosam ipsam aperiam porro!
        Odit quibusdam ratione laboriosam mollitia numquam eos earum, sequi
        accusamus praesentium odio veniam incidunt, quia vitae iste, explicabo
        unde facilis voluptates rerum illo distinctio! Magnam aliquam expedita,
        dolorum nihil aliquid ex. Sequi odit sit iusto repellat quis
        consequuntur error consequatur totam exercitationem sed eveniet at
        architecto dolore, dignissimos qui aperiam vero, cum ut. Quos vitae
        dolore ducimus excepturi libero distinctio at quibusdam commodi! Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsa, enim
        molestiae reprehenderit provident vel aut mollitia ducimus, blanditiis,
        quidem velit cum? Asperiores eveniet, nam sit blanditiis maiores cumque
        repudiandae sunt, ipsa sint obcaecati tempore culpa deserunt, laborum
        repellendus! Ut maxime dignissimos deleniti, et deserunt placeat
        expedita esse quidem quo aspernatur nostrum laboriosam odio est libero,
        distinctio voluptatem facilis dolor illo aliquam in sit. Fugiat, id
        distinctio? Commodi inventore quos labore harum cum deserunt facilis,
        eaque vitae praesentium, possimus at ipsa nesciunt. Cumque deleniti
        facere voluptatem temporibus ducimus quidem amet, itaque reprehenderit
        ullam nemo dolorum assumenda sed ex asperiores impedit qui quis animi
        iste distinctio magni aspernatur voluptatum. Accusantium repellendus ad
        quam in quas aliquam distinctio expedita obcaecati beatae maxime
        officiis non perspiciatis, dignissimos ut, sit eos atque laborum velit
        repellat illum? Repellendus esse corporis dolor maiores dolores
        voluptatum obcaecati aut dolorum iure distinctio vero harum cum,
        molestias vel fuga enim deleniti veritatis illum ab velit exercitationem
        eum libero aliquid architecto. Eaque aliquid repellat porro vel quaerat,
        veritatis debitis eum eius est quo ratione nisi voluptates quis nihil
        officiis beatae aut earum, quas sed alias inventore consequatur voluptas
        laboriosam rem. Consequuntur voluptates hic aliquam provident porro
        quidem praesentium cupiditate?
      </section>
      <section ref={ref2}>
        <h3>Section 2</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
        inventore facilis dolorum at iure unde, perferendis sed est qui sequi
        nam, quas, suscipit eveniet accusantium! Architecto illum exercitationem
        mollitia blanditiis, incidunt inventore laboriosam ipsam aperiam porro!
        Odit quibusdam ratione laboriosam mollitia numquam eos earum, sequi
        accusamus praesentium odio veniam incidunt, quia vitae iste, explicabo
        unde facilis voluptates rerum illo distinctio! Magnam aliquam expedita,
        dolorum nihil aliquid ex. Sequi odit sit iusto repellat quis
        consequuntur error consequatur totam exercitationem sed eveniet at
        architecto dolore, dignissimos qui aperiam vero, cum ut. Quos vitae
        dolore ducimus excepturi libero distinctio at quibusdam commodi! Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsa, enim
        molestiae reprehenderit provident vel aut mollitia ducimus, blanditiis,
        quidem velit cum? Asperiores eveniet, nam sit blanditiis maiores cumque
        repudiandae sunt, ipsa sint obcaecati tempore culpa deserunt, laborum
        repellendus! Ut maxime dignissimos deleniti, et deserunt placeat
        expedita esse quidem quo aspernatur nostrum laboriosam odio est libero,
        distinctio voluptatem facilis dolor illo aliquam in sit. Fugiat, id
        distinctio? Commodi inventore quos labore harum cum deserunt facilis,
        eaque vitae praesentium, possimus at ipsa nesciunt. Cumque deleniti
        facere voluptatem temporibus ducimus quidem amet, itaque reprehenderit
        ullam nemo dolorum assumenda sed ex asperiores impedit qui quis animi
        iste distinctio magni aspernatur voluptatum. Accusantium repellendus ad
        quam in quas aliquam distinctio expedita obcaecati beatae maxime
        officiis non perspiciatis, dignissimos ut, sit eos atque laborum velit
        repellat illum? Repellendus esse corporis dolor maiores dolores
        voluptatum obcaecati aut dolorum iure distinctio vero harum cum,
        molestias vel fuga enim deleniti veritatis illum ab velit exercitationem
        eum libero aliquid architecto. Eaque aliquid repellat porro vel quaerat,
        veritatis debitis eum eius est quo ratione nisi voluptates quis nihil
        officiis beatae aut earum, quas sed alias inventore consequatur voluptas
        laboriosam rem. Consequuntur voluptates hic aliquam provident porro
        quidem praesentium cupiditate?
      </section>
      <section ref={ref3}>
        <h3>Section 3</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
        inventore facilis dolorum at iure unde, perferendis sed est qui sequi
        nam, quas, suscipit eveniet accusantium! Architecto illum exercitationem
        mollitia blanditiis, incidunt inventore laboriosam ipsam aperiam porro!
        Odit quibusdam ratione laboriosam mollitia numquam eos earum, sequi
        accusamus praesentium odio veniam incidunt, quia vitae iste, explicabo
        unde facilis voluptates rerum illo distinctio! Magnam aliquam expedita,
        dolorum nihil aliquid ex. Sequi odit sit iusto repellat quis
        consequuntur error consequatur totam exercitationem sed eveniet at
        architecto dolore, dignissimos qui aperiam vero, cum ut. Quos vitae
        dolore ducimus excepturi libero distinctio at quibusdam commodi! Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsa, enim
        molestiae reprehenderit provident vel aut mollitia ducimus, blanditiis,
        quidem velit cum? Asperiores eveniet, nam sit blanditiis maiores cumque
        repudiandae sunt, ipsa sint obcaecati tempore culpa deserunt, laborum
        repellendus! Ut maxime dignissimos deleniti, et deserunt placeat
        expedita esse quidem quo aspernatur nostrum laboriosam odio est libero,
        distinctio voluptatem facilis dolor illo aliquam in sit. Fugiat, id
        distinctio? Commodi inventore quos labore harum cum deserunt facilis,
        eaque vitae praesentium, possimus at ipsa nesciunt. Cumque deleniti
        facere voluptatem temporibus ducimus quidem amet, itaque reprehenderit
        ullam nemo dolorum assumenda sed ex asperiores impedit qui quis animi
        iste distinctio magni aspernatur voluptatum. Accusantium repellendus ad
        quam in quas aliquam distinctio expedita obcaecati beatae maxime
        officiis non perspiciatis, dignissimos ut, sit eos atque laborum velit
        repellat illum? Repellendus esse corporis dolor maiores dolores
        voluptatum obcaecati aut dolorum iure distinctio vero harum cum,
        molestias vel fuga enim deleniti veritatis illum ab velit exercitationem
        eum libero aliquid architecto. Eaque aliquid repellat porro vel quaerat,
        veritatis debitis eum eius est quo ratione nisi voluptates quis nihil
        officiis beatae aut earum, quas sed alias inventore consequatur voluptas
        laboriosam rem. Consequuntur voluptates hic aliquam provident porro
        quidem praesentium cupiditate?
      </section>
    </div>
  );
};

export default Navigator;
