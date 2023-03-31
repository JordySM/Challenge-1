/**
 * Agrega nuevo deseo a lista de pendientes
 */
function addPendingWish()
{
    let input_wish = document.querySelector("#new-description-wish");
    let description_wish = input_wish.value;
    input_wish.value = "";
    
    let row_wish = document.createElement("div");
        row_wish.classList.add("wish");

        let description = document.createElement("div");
            description.classList.add("description")
            description.innerHTML = description_wish;
        let btn_delete = document.createElement("div");
            btn_delete.classList.add("btn", "delete");
            btn_delete.innerHTML = "X";
            btn_delete.setAttribute("onclick", "deleteWish(this)");
        let btn_check = document.createElement("div");
            btn_check.classList.add("btn", "check");
            btn_check.innerHTML = "L";
            btn_check.setAttribute("onclick", "checkWish(this)");
            
        row_wish.appendChild(description);
        row_wish.appendChild(btn_delete);
        row_wish.appendChild(btn_check);

    document.querySelector(".list.pending .list-body").appendChild(row_wish);

    countWishes();
}
/**
 * Cuenta cada uno de las filas en cada lista
 */
function countWishes()
{
    let count_pending = document.querySelectorAll(".list.pending .list-body .wish").length;
    document.querySelector(".list.pending .count-wishes").innerHTML = count_pending;

    let count_fulfilled = document.querySelectorAll(".list.fulfilled .list-body .wish").length;
    document.querySelector(".list.fulfilled .count-wishes").innerHTML = count_fulfilled;
}
/**
 * Marca deseo como cumplido
 * @param {HTMLElement} btnCheck , botón de marcar deseo como cumplido
 */
function checkWish(btnCheck)
{
    let row_wish = btnCheck.parentNode;
    let btn_check = row_wish.querySelector(".check");
    btn_check.parentNode.removeChild(btn_check);
    let btn_delete = row_wish.querySelector(".delete");
    btn_delete.parentNode.removeChild(btn_delete);

    let list_fulfilled = document.querySelector(".list.fulfilled .list-body");
        list_fulfilled.appendChild(row_wish);

    countWishes();
}
/**
 * Marca deseo como cumplido
 * @param {HTMLElement} btnCheck , botón de eliminar deseo
 */
function deleteWish(btnCheck)
{
    let row_wish = btnCheck.parentNode;
        
        row_wish.parentNode.removeChild(row_wish);

    countWishes();
}
