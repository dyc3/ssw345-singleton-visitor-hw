package visitor_pattern;

public class Mouse implements ComputerPart {
	public void accept(ComputerPartVisitor computerPartVisitor) {
		computerPartVisitor.visit(this);
	}
}
