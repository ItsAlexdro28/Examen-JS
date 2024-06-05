import { LitElement, css, html } from 'lit'

export class galery extends LitElement {

    static styles = css `
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
        padding: 20px;
        background-color: #222;
        color: #fff;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999; 
    }

    .modal-content {
        background-color: #333;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        color: #FF0000;
        font-size: 30px;
    }

    .close:hover {
        color: #ccc;
    }

    .modal-content img {
        width: 100%;
        height: auto;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px;
    }

    .image-grid img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
        
    .image-grid img:hover {
        transform: scale(1.1, 1.1);
    }
    //me encanta el CSS <3

    `
    constructor() {
        super();
        this.imageUrls = [
    {
        img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg'
    },
    {
        img : 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg'
    },
    {
        img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg'
    },
    {
        img : 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg'
    },
    {
        img : 'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg'
    },
    {
        img : 'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine'
    },
    {
        img : 'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg'
    },
    {
        img : 'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png'
    },
    {
        img : 'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg'
    },
    {
        img : 'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg'
    },
    {
        img : 'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg'
    },
    {
        img : 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg'
    },
    ] ;
    }

    render() {
        return html `
            <div class="image-grid">
                ${this.imageUrls.map((image, index) => html`
                    <img src="${image.img}" alt="Gallery Image" @click="${() => this.openModal(index)}">
                `)}
            </div>
            <div class="modal" id="myModal">
                <div class="modal-content">
                    <span class="close" @click="${this.closeModal}">&times;</span>
                    <img id="modal-img" src="" alt="Modal Image">
                </div>
            </div>
        `;
    }

    openModal(index) {
        const modal = this.shadowRoot.querySelector('.modal');
        const modalImg = modal.querySelector('#modal-img');
        modal.style.display = 'flex';
        modalImg.src = this.imageUrls[index].img;
    }

    closeModal() {
        const modal = this.shadowRoot.querySelector('.modal');
        modal.style.display = 'none';
    }
}

customElements.define('galery-comp', galery);