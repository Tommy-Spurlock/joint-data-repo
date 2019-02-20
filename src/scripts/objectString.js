// String of info for dom print


const objectString = (objectParam) => {
    return  `<article class="employee">
    <header class="employee__name">
        <h1>${objectParam.firstName} ${objectParam.lastName}</h1>
    </header>
    <section class="employee__department">
        Works in the ${objectParam.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${objectParam.computer.type}
    </section>
</article>`
}

export default objectString