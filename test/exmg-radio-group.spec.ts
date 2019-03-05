import {ExmgRadioGroup} from '../exmg-radio-group';
import {ExmgRadioGroupItem} from '../exmg-radio-group-item';
import {promisifyFlush, onExmgRadioGroupChanged} from './utils';

declare const fixture: <T extends HTMLElement = HTMLElement>(id: string, model?: object) => T;
declare const flush: (cb?: Function) => void;

const {assert} = chai;

suite('<exmg-radio-group>', function () {
  let element: ExmgRadioGroup;
  const flushCompleted = promisifyFlush(flush);

  suite('base usage', function () {
    setup(() => {
      element = fixture('BasicTestFixture');
    });

    test('element is upgraded', function () {
      assert.instanceOf(element, ExmgRadioGroup);
    });

    test('item selection works properly', async () => {
      await flushCompleted();

      const toBeSelectedItemElem = element.querySelectorAll<ExmgRadioGroupItem>('exmg-radio-group-item')[1];

      const eventPromise = onExmgRadioGroupChanged(element, true);

      toBeSelectedItemElem.click();

      const {detail} = await eventPromise;

      assert.equal(detail.selected, 'item2');
    });
  });
});
