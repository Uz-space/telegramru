import Animated from '@helpers/solid/animations';
import styles from '@components/sidebarLeft/pendingSuggestion.module.scss';
import {createEffect, createSignal, JSX} from 'solid-js';
import {render} from 'solid-js/web';

export function renderPendingSuggestion(toElement: HTMLElement) {
  toElement.classList.add(styles.container);

  render(() => {
    const [element, setElement] = createSignal<JSX.Element>();

    createEffect(() => {
      setElement(undefined);
    });

    createEffect(() => {
      document.body.classList.toggle('has-pending-suggestion', !!element());
    });

    return (
      <Animated
        type="grow-height"
        appear
        mode="add-remove"
        noItemClass
      >
        {element()}
      </Animated>
    );
  }, toElement);
}
