import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPosts } from "../actions";


class PostList extends Component {

    componentDidMount = () => {
      this.props.fetchPosts();
    }


    renderLists () {
      return this.props.posts.map(
        post => {
          return (
              <div className="container my-24 px-6 mx-auto" key={post.id}>
                {/* Section: Design Block */}
                <section className="mb-32 text-gray-800">
                  <h1 className="font-bold text-3xl mb-4">{post.title}/h1>
                  <p className="uppercase text-red-600 font-bold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 mr-2">
                      {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                      <path fill="currentColor" d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                    </svg>Hot news
                  </p>
                  <p className="mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente molestias
                    consectetur. Fuga nulla officia error placeat veniam, officiis rerum laboriosam ullam
                    molestiae magni velit laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Optio sapiente molestias consectetur. Fuga nulla
                    officia error placeat veniam, officiis rerum laboriosam ullam molestiae magni velit
                    laborum itaque minima doloribus eligendi!
                  </p>
                  <p className="mb-6"><strong>Optio sapiente molestias consectetur?</strong></p>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto ex ab aut
                    tempora officia libero praesentium, sint id magnam eius natus unde blanditiis. Autem
                    adipisci totam sit consequuntur eligendi.
                  </p>
                  <p className="note note-light border-l-4 border-gray-800 rounded p-2 mb-6">
                    <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                    odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint, adipisci ad
                    veritatis laborum eaque illum saepe mollitia ut voluptatum.
                  </p>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero repellat
                    molestiae aperiam laborum aliquid atque magni nostrum, inventore perspiciatis possimus
                    quia incidunt maiores molestias eaque nam commodi! Magnam, labore.
                  </p>
                  <img src="https://mdbootstrap.com/img/new/slides/194.jpg" className="w-full shadow-lg rounded-lg mb-6" alt />
                  <ul className="list-disc list-inside mb-6">
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                    <li>Amet</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla
                    voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab
                    officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?
                  </p>
                </section>
                {/* Section: Design Block */}
              </div>

          );
        }
      );
    }

  render() {
   
    return (
      <div>
        {this.renderLists()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts :  state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);