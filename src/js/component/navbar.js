import React, { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchPlanets();
    }, [actions]);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
                <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle ms-auto"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorites {store.favorites.length}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites.map((favorite) => (
                        <li key={favorite.id} className="d-flex align-items-center">
                            <button
                                type="button"
                                className="btn me-2"
                                onClick={() => actions.navigateFromFavorite(favorite.name, navigate)}
                                aria-label={`Navigate to ${favorite.name}`}
                            >
                                <span>{favorite.name}</span>
                            </button>
                            <FaTrash
                                onClick={() => actions.toggleFavorite(favorite.id, favorite.type, favorite.name)}
                                aria-label={`Remove ${favorite.name} from favorites`}
                                role="button"
                                style={{ cursor: 'pointer' }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};