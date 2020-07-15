/**Componente para criação dos cards do bootstrap 
 * exemplo: https://getbootstrap.com.br/docs/4.1/components/card/
 * 
*/

const CardComponent = (props) => {
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{ props.title }</h5>
                <p class="card-text">{ props.text }</p>
                <a href="#" class={ props.classBtn }>{ props.textBtn }</a>
            </div>
        </div>
    );
};

export default CardComponent;

