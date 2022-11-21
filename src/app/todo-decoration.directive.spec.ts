import { TodoDecorationDirective } from './todo-decoration.directive';

describe('TodoDecorationDirective', () => {
  it('should create an instance', () => {
    //@ts-ignore
    const directive = new TodoDecorationDirective();
    expect(directive).toBeTruthy();
  });
});
