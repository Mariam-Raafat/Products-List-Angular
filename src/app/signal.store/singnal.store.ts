import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { Product } from "../interfaces/product.interface";
const initialCount = 0;
const initialProductCount = 1;
export const FavListStore = signalStore(
    { providedIn: 'root' },

    withState({
        counter: initialCount,
        favList: [] as Product[],
        basketList: [] as Product[],
        productCount: initialProductCount
    }),

    withComputed((state) => ({
        count: computed(() => state.favList().length),
        basketCount: computed(() => state.basketList().length),
        totalPrice: computed(() => {
            const list = state.basketList();
            let total = 0;
            for (let item of list) {
                const qty = item.quantity || 1;
                total += item.price * qty;
            }
            return total;
        })
    })),

    withMethods((state) => ({
        addToFavList: (product: Product) => patchState(state, {
            favList: state.favList().some(p => p.id === product.id) ? state.favList() :
                [...state.favList(), product]

        }),

        removeFromFavList: (productId: number) => patchState(state, {
            favList: state.favList().filter(p => p.id !== productId)
        }),
        addToBasketList: (product: Product) => patchState(state, {
            basketList: state.basketList().some(p => p.id === product.id) ? state.basketList() :
                [...state.basketList(), product]
        }),
        removeFromBasket: (productId: number) => patchState(state, {
            basketList: state.basketList().filter(p => p.id !== productId)
        }),

        increaseQuantity: (id: number) => {
            const updated = state.basketList().map(product => {
                const qty = product.quantity || state.productCount();
                if (product.id === id && qty < product.stock) {
                    return { ...product, quantity: qty + state.productCount() };
                }
                return product;
            });
            patchState(state, { basketList: updated });
        },


        decreaseQuantity: (id: number) => {
            const updated = state.basketList().map(product => {
                const qty = product.quantity || 1;
                if (product.id === id && qty > 1) {
                    return { ...product, quantity: qty - 1 };
                }
                return product;
            });
            patchState(state, { basketList: updated });
        }
    })),






);